from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status   

# Create your views here.




class FreelanceServicePosting(APIView):
    def get(self,request):
        service = FreelancerService.objects.all()
        serviceserializer = FreelancerServiceSerializer(service,many = True)
        return Response (serviceserializer.data)
    def post(self,request):
        data=request.data
        print(data['img'],'iiiiiiiiiiiiiiiiiiiii')
        service = FreelancerServiceSerializer(data=request.data)
        print(service)
        if service.is_valid():
            service.save()
            return Response (200)
        else:
            print('not founddrrrrrrd')
            return Response(status=status.HTTP_404_NOT_FOUND)