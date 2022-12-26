from accounts.models import NewUser
from .models import *
from .serializer import CategorySerializers,ClientJobSerializer,PayJobSerializer,FreelancerRequestSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets,mixins
from rest_framework import status   
from freelancerside.models import *
from freelancerside.serializers import *
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import stripe
from django.shortcuts import redirect
from django.conf import settings
from django.db.models import Q
from datetime import datetime

# Create your views here.

class CategoryView(APIView):
    def get(self,request):
        category = Category.objects.all()
        serializer = CategorySerializers(category, many=True)
        return Response(serializer.data)


class ClientJobPosting(APIView):
    def get(self,request):

        query = request.query_params.get('keyword')
        if query is None:
            query = ''

        jobs = ClientJobs.objects.filter(
            Q(job_title__icontains=query) | Q(category__category_name=query)).order_by('-jobtime')

        page = request.query_params.get('page')
        paginator = Paginator(jobs, 2)

        try:
            jobs = paginator.page(page)
        except PageNotAnInteger:
            jobs = paginator.page(1)
        except EmptyPage:
            jobs = paginator.page(paginator.num_pages)

        if page is None:
            page = 1
        page = int(page)
        print('Page:', page)
        jobserialize = ClientJobSerializer(jobs,many = True)
        return Response ({'jobs':jobserialize.data, 'page': page, 'pages': paginator.num_pages})
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
        if ifexist := ServiceRating.objects.filter(
            reviewuser=data['reviewuser'], service=data['service']
        ):
            ifexist.update(title=data['title'],stars=data['stars'],review=data['review'])
            print("updated existing")
            return Response(status=status.HTTP_201_CREATED)
        else:
            review = ServiceRatingSerializer(data=data)
            if review.is_valid():
                review.save()
                print('created')
                return Response(status=status.HTTP_201_CREATED)
            else:
                print(review.errors,'fff')
                return Response(status=status.HTTP_404_NOT_FOUND)
        


class AcceptBid(APIView):
    def post(self,request,id):
        bid = Bids.objects.get(id=id)
        job = ClientJobs.objects.get(id=bid.clientjob.id)
        job.bidder = True
        bid.bidaccepted = True 
        job.save()
        bid.save()   
        return Response(status=status.HTTP_200_OK)


class ReportService(APIView):
    def post(self,request,id):
        service = FreelancerService.objects.get(id = id)
        service.reported = True
        service.save()
        data = request.data
        report = ServiceReportSerializer(data=data)
        if report.is_valid():
            report.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(report.errors,'fff')
            return Response(status=status.HTTP_404_NOT_FOUND)


from dateutil.relativedelta import relativedelta  

def membership_activation(user,price):
    current_datetime = datetime.now()  
    date = current_datetime + relativedelta(months = 1)
    if  price == 120:
        updateuser = NewUser.objects.filter(id = user)
        updateuser.update(active_membership='Basic',membership_expiry=date)
    
    elif price == 240:
        updateuser = NewUser.objects.filter(id = user)
        updateuser.update(active_membership='Standard',membership_expiry=date)
    elif price == 360:
        updateuser = NewUser.objects.filter(id = user)
        updateuser.update(active_membership='Extended',membership_expiry=date)



stripe.api_key = settings.STRIPE_SECRET_KEY

class CreateCheckOutSession(APIView):
    def post(self, request):
        price = request.POST.get('price')
        newprice = int(float(price))
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price_data': {
                            'currency': 'usd',
                            'unit_amount': newprice * 100,
                            'product_data': {
                                'name': "Membership",
                            },
                        },
                        'quantity': 1,
                    }
                ],
                mode='payment',
                success_url=f'{settings.SITE_URL}freelancer/?success=true&price={price}',
                cancel_url=f'{settings.SITE_URL}freelancer/?canceled=true',
            )
            return redirect(checkout_session.url)
        except Exception as e:
            return Response({'msg': 'something went wrong while creating stripe session', 'error': str(e)}, status=500)




class PaypalPayment(APIView):
    def post(self,request):
        data = request.data
        print(data,'paymenttttttttttttttTt')
        user = data['user']
        price = data['price']
        membership_activation(user,price) 
        return Response (status=status.HTTP_200_OK) 

class ServicePaypalPayment(APIView):
    def post(self,request):
        data = request.data
        serializeddata = BuyServiceSerializer(data = data)
        if serializeddata.is_valid():
            serializeddata.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializeddata.errors,'servicepaypal errorrrrr')
            return Response(status=status.HTTP_404_NOT_FOUND)

class JobPaypalPayment(APIView):
    def post(self,request):
        data = request.data
        serializeddata = PayJobSerializer(data=data)
        if serializeddata.is_valid():
            serializeddata.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializeddata.errors,'job paypal errorrrrr')
            return Response(status=status.HTTP_404_NOT_FOUND)


class Freelancer_request(APIView):
    def post(self,request):
        data = request.data
        serializers = FreelancerRequestSerializer(data=data)
        if serializers.is_valid():
            serializers.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializers.errors,'serializer error')
            return Response(status=status.HTTP_404_NOT_FOUND)



        