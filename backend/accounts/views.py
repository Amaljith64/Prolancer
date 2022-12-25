from rest_framework.response import Response
from rest_framework.views import APIView
from . models import *
from . serializers import *
from rest_framework import status   
from django.shortcuts import get_object_or_404,get_list_or_404


# Create your views here.

class UserProfile(APIView):
    def get(self,request,id):
        profile = get_object_or_404(NewUser,id = id)
        profileserializer = FullProfileSerializer(profile)       
        if profileserializer.is_valid:        
            return Response (profileserializer.data,status=status.HTTP_200_OK)            
        else:
            print(profileserializer.errors,'profileserializer errorssss')
            return Response (status=status.HTTP_404_NOT_FOUND)

class AllUsers(APIView):
    def get(self,request):
        userss = get_list_or_404(NewUser,is_freelancer = True)
        alluserserializer = FullProfileSerializer(userss,many=True)
        if alluserserializer.is_valid:
            return Response (alluserserializer.data,status=status.HTTP_200_OK)
        else:
            print(alluserserializer.errors,'AllUser erooro')
            return Response( status= status.HTTP_404_NOT_FOUND)


class EducationView(APIView):
    def post(self,request):
        education = EducatationSerializer(data=request.data)
        if education.is_valid():
            education.save()
            print('validdddddddddd')
            return Response (status=status.HTTP_201_CREATED)
        else:
            print(education.errors,'errrrrrrrrrrr')
            return Response(status=status.HTTP_404_NOT_FOUND)
class EditEducationView(APIView):
    def patch(self,request,id):
        education = Education.objects.filter(id=id)
        educationserializer = EducatationSerializer(data=request.data)
        if educationserializer.is_valid():
            education.update(educationserializer.data)
            return Response (status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)