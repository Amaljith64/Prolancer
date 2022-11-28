from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from accounts.models import NewUser
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets,mixins
from rest_framework import status   
import json

# Create your views here.


class CategoryView(APIView):
    def get(self,request):
        category = Category.objects.all()
        serializer = CategorySerializers(category, many=True)
        return Response(serializer.data)


class ClientJobPosting(APIView):
    def get(self,request):
        jobs = ClientJobs.objects.all()
        jobserialize = ClientJobSerializer(jobs,many = True)
        return Response (200)
    def post(self,request):
        data=request.data
        print(data['img'],'iiiiiiiiiiiiiiiiiiiii')
        jobs = ClientJobSerializer(data=request.data)
        print(jobs)
        if jobs.is_valid():
            jobs.save()
            return Response (200)
        else:
            print('not founddrrrrrrd')
            return Response(status=status.HTTP_404_NOT_FOUND)

  


# class GetCategory(viewsets.ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializers

#     def perform_create(self,serializer):
#         serializer.is_valid(raise_exception = True)
#         serializer.save()
   


