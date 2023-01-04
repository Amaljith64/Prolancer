from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status 
from accounts.serializers import NewUser,NewUserSerializer
from rest_framework.views import APIView
from .models import ChatModel
from django.db.models import Q
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from.serializers import ChatModelSerializer

# Create your views here.





class ChatPage(APIView):
    def post(self,request):
         
        data = request.data
        print(data['userid'],'its reqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
        user=NewUser.objects.get(id= data['userid'])

        chats = ChatModel.objects.filter(Q(sender = user.id) | Q(reciever = user.id))
        if chats :
            chat_list = set()

            for chat in chats:
                sender = NewUser.objects.get(id = chat.sender.id)
                reciever = NewUser.objects.get(id = chat.reciever.id)
                chat_list.add(sender)
                chat_list.add(reciever)
            
            otherusers = NewUser.objects.exclude(id = user.id)
            chatted_user = [user for user in otherusers if user in chat_list]
            serializers = NewUserSerializer(chatted_user, many=True)
            if serializers.is_valid:
                return Response(serializers.data,status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)


class ChatData(APIView):
    def post(self,request):
        try:
            data = request.data
            userId = data['userId']
            recieverId = data['recieverId']
            if int(userId) > int(recieverId):
                room_name = f'{userId}-{recieverId}'
            else:
                room_name = f'{recieverId}-{userId}'
            thread = f'chat_{room_name}'
            chatmessages = ChatModel.objects.filter(thread_name= thread)
            serializer = ChatModelSerializer(chatmessages,many=True)
            if serializer.is_valid:
                return Response(serializer.data,status=status.HTTP_200_OK)
            else:
                print(serializer.errors)
                return Response(status=status.HTTP_400_BAD_REQUEST)

        except:
            return Response(status=status.HTTP_404_NOT_FOUND)




