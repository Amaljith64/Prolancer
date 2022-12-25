from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status   
from clientside.models import *
from clientside.serializer import *

# Create your views here.


def post_validation(request,user):
    print(user,'from functionnnnnnnnn')
    user_membership = user.active_membership
    print(user_membership)
    service_count = FreelancerService.objects.filter(user=user).count()
    print(service_count,'counttttttttt')
    try:
        if user_membership == 'Basic' :
            if service_count < 1:
                return True
            else:
                return False

        elif user_membership == 'Standard' :
            if service_count < 3:
                return True
            else:
                return False

        elif user_membership == 'Extended ':
            if service_count < 6:
                return True
            else:
                return False

        else:
            return False

    except:
        return False

class FreelanceServicePosting(APIView):
    def get(self,request):
        service = FreelancerService.objects.all()
        serviceserializer = FreelancerServiceSerializer(service,many = True)
        return Response (serviceserializer.data)
    def post(self,request):
        data=request.data
        active_user= data['user']
        user = NewUser.objects.get(id=active_user)
        approval=post_validation(request,user)
        print(approval,'its approvallll')
        pass
        if not post_validation(request,user):
            message = 'Buy Membership Or Upgrade Your Membership'
            print('Upgrade Your Membership')
            return Response({
                'Message': message,
                'status': 402
            })
        service = FreelancerServiceSerializer(data=request.data)
        if service.is_valid():
            print('its validdddd')
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
        service = ClientJobs.objects.get(id=data['clientjob'])
        user = NewUser.objects.get(id = data['user'] )
        bids =Bids.objects.filter(user=user,clientjob = service)
        if bids :
            bids.update(bidrate=data['bidrate'],daysrequired=data['daysrequired'])
            print("updated existing") 
            return Response(status=status.HTTP_201_CREATED)
        else :
            serializer = BidSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                print("created new bid")
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            else:
                print(serializer.errors)
                print('Not valid') 
                return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)
   

class ReportJob(APIView):
    def post(self,request,id):
        job = ClientJobs.objects.get(id = id)
        job.reported = True
        job.save()
        data = request.data
        report = JobReportSerializer(data=data)
        if report.is_valid():
            report.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(report.errors,'fff')
            return Response(status=status.HTTP_404_NOT_FOUND)