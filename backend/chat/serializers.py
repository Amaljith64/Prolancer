from .models import ChatModel
from rest_framework import serializers
from clientside.serializer import UserAccountSerializer

class ChatModelSerializer(serializers.ModelSerializer):
    sender=UserAccountSerializer(read_only=True)
    reciever=UserAccountSerializer(read_only=True)
    class Meta:
        model = ChatModel
        fields = '__all__'