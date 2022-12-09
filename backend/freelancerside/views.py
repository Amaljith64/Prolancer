from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status   
from clientside.models import *
from clientside.serializer import *


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

class FreelanceJobView(APIView):
    def get(self,request,id):
        print(id)

        service = ClientJobs.objects.get(id=id)
        bids = Bids.objects.filter(clientjob=id)
        listjobs = ClientJobViewSerializer(service)
        listbids = BidViewSerializer(bids,many=True)

        if listjobs:            
            return Response ({'service' :listjobs.data,
            'bids': listbids.data },status=200)
        else:
            print(listbids.errors)
            return Response (status=400)
   
class SentBid(APIView):
     def post(self,request):
        data = request.data
        print(data,'oooooooooooooooo')
        service = ClientJobs.objects.get(id=data['clientjob'])
        user = NewUser.objects.get(id = data['user'] )

        bid=Bids.objects.create(user=user,clientjob=service,bidrate=data['bidrate'],daysrequired=data['daysrequired'])
        serializer = BidSerializer(data=bid)
        return Response(serializer.data,status=status.HTTP_201_CREATED)
        