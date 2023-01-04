from django.db import models
from accounts.models import NewUser

# Create your models here.

class ChatModel(models.Model):
    thread_name = models.CharField(max_length = 100,null = True)
    sender = models.ForeignKey(NewUser,on_delete=models.CASCADE,related_name="sender")
    reciever = models.ForeignKey(NewUser,on_delete=models.CASCADE,related_name="reciever")
    message = models.CharField(max_length=225,null= True,blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)