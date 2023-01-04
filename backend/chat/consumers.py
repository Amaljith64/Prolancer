import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from . models import ChatModel
from accounts.models import NewUser



class PersonalChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):

        my_id = self.scope['url_route']['kwargs']['myid']
        print(my_id,'its myyyyyyyyyyyyyyyy')

        other_user_id = self.scope['url_route']['kwargs']['id']
        if int(my_id) > int(other_user_id):
            self.room_name = f'{my_id}-{other_user_id}'
        else:
            self.room_name = f'{other_user_id}-{my_id}'

        self.room_group_name = f'chat_{self.room_name}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name,
        )

        await self.create_thread(self.room_group_name,other_user_id,my_id)

        await self.accept()


    async def disconnect(self, code):
        self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_layer
        )

    async def receive(self,text_data=None,bytes_data=None):
        data = json.loads(text_data)
        messsage = data['message']
        senderId = data['senderId']
        recieverId = data['recieverId']

        await self.save_messages(self.room_group_name,messsage,senderId,recieverId)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type':'chat_message',
                'message':messsage,
                'recieverId':recieverId
            }
        )

    async def chat_message(self,event):
        message = event['message']
        recieverId = event['recieverId']
   

        await self.send(text_data=json.dumps({
            'message':message,
        }))


    @database_sync_to_async
    def save_messages(self,thread_name,messsage,senderId,recieverId):
        msgsender = NewUser.objects.get(id = senderId)
        msgreciever = NewUser.objects.get(id = recieverId)
        ChatModel.objects.create(
            sender=msgsender,thread_name=thread_name,message=messsage,
            reciever=msgreciever
        )

    @database_sync_to_async
    def create_thread(self, thread_name, reciever, sender):
        if not ChatModel.objects.filter(thread_name = thread_name).first():
            msgsender = NewUser.objects.get(id = sender)
            msgreciever = NewUser.objects.get(id = reciever)
            ChatModel.objects.create(thread_name = thread_name, sender = msgsender, reciever = msgreciever)
            