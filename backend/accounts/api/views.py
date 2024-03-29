from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from accounts.models import *

from .serializers import *
from accounts.models import Note

from rest_framework.views import APIView
import json

import random
import uuid
from django.core.cache import cache
from django.contrib.auth.hashers import make_password

from accounts.api.helpers import verify_account_after_registration




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):

        print('at loginn ')
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['is_superuser'] = user.is_superuser
        token['user_id'] = user.id
        token['is_freelancer'] = user.is_freelancer
        token['is_email_verified'] = user.is_email_verified
        # ...

        return token
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        
        # Add custom claims
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['username'] = self.user.username
        data['is_superuser'] = self.user.is_superuser
        data['user_id'] = self.user.id
        data['is_freelancer'] = self.user.is_freelancer
        data['is_email_verified'] = self.user.is_email_verified
        # ...

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)

class Usersignup(APIView):
    def post(self,request):  # sourcery skip: extract-method
        body = request.body.decode('utf-8')
        body = json.loads(body)
        username = body['username']
        email = body['email']
        password=body['password']
        try:
            user = NewUser.objects.create_user(username=username, email=email,password=password)
            
            return Response(200)
        except Exception:
            return Response({'error':"Username or Email already exists"},status=status.HTTP_406_NOT_ACCEPTABLE)


class CheckUsername(APIView):
    def post(self,request):
        data = request.data
        print(data,'itssssssssssssssssssssssss')
        if NewUser.objects.filter(username=data['username']):

            return Response({'data':"Username exists"},status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            return Response({'data':"Username Available"},status=status.HTTP_200_OK)



class ChangePassword(APIView):
    def post(self,request):
        data = request.data
        print(data)
        if data['password1'] == data['password2']:
            user=NewUser.objects.get(id=data['userid'])
            user.set_password(data['password2'])
            user.save()
            print('matched')
            return Response({'data':"Password Changed"}, status=status.HTTP_200_OK)
        else:
            print('not a match')
            return Response({'data':"Password Mismatch"}, status=status.HTTP_404_NOT_FOUND)

class GoogleSignup(APIView):
    def post(self,request):
        data = request.data
        if NewUser.objects.filter(email=data['email']):
            print('exixttttttttttttttt')
            return Response(200)
        username = data['username']
        email = data['email']
        password=data['password']
        NewUser.objects.create_user(username=username, email=email,password=password,is_email_verified = True
        )
        print('created googleeeeeeeeeeeeeeeeeee')
        return Response(200)



