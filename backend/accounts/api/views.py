from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from accounts.models import *

from .serializers import *
from accounts.models import Note

from rest_framework.views import APIView
import json


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['is_superuser'] = user.is_superuser
        token['user_id'] = user.id
        token['is_freelancer'] = user.is_freelancer
        # ...

        return token


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
    def post(self,request):
        body = request.body.decode('utf-8')
        body = json.loads(body)
        username = body['username']
        email = body['email']
        password=body['password']
        NewUser.objects.create_user(username=username, email=email,password=password
        )
        return Response(200)
class GoogleSignup(APIView):
    def post(self,request):
        data = request.data
        if NewUser.objects.filter(email=data['email']):
            print('exixttttttttttttttt')
            return Response(200)
        username = data['username']
        email = data['email']
        password=data['password']
        NewUser.objects.create_user(username=username, email=email,password=password
        )
        print('created googleeeeeeeeeeeeeeeeeee')
        return Response(200)



