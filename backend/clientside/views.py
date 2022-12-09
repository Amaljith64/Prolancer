from accounts.models import NewUser
from .models import *
from .serializer import CategorySerializers,ClientJobSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets,mixins
from rest_framework import status   
from freelancerside.models import *
from freelancerside.serializers import *

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
        return Response (jobserialize.data)
    def post(self,request):
        jobs = ClientJobSerializer(data=request.data)
        if jobs.is_valid():
            jobs.save()
            return Response (200)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

  
class ClientServiceView(APIView):
    def get(self,request):
        service = FreelancerService.objects.all()
        serviceserializer = FreelancerServiceSerializer(service,many = True)
        
        return Response (serviceserializer.data)
class ClientSingleServiceView(APIView):
    def get(self,request,id):
        service = FreelancerService.objects.get(id = id)
        serviceserializer = FreelancerServiceSerializer(service)
        reviews = ServiceRating.objects.filter(service = service)
        reviewserializer = ServiceRatingSerializer(reviews,many=True)
        if serviceserializer.is_valid :
            return Response ({'service':serviceserializer.data,
            'review' : reviewserializer.data},status=status.HTTP_200_OK)
        else:
            return Response (status=status.HTTP_404_NOT_FOUND)
        
    def post(self,request,id):
        data = request.data
        review = ServiceRatingSerializer(data=data)
        if review.is_valid():
            review.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(review.errors,'fff')
            return Response(status=status.HTTP_404_NOT_FOUND)
        




    
