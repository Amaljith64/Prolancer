from dateutil.relativedelta import relativedelta
from accounts.models import NewUser
from .models import *
from .serializer import CategorySerializers, ClientJobSerializer, PayJobSerializer, FreelancerRequestSerializer, ViewPayJobSerializer,PostFreelancerRequestSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets, mixins
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

def post_validation(request,user):
    print(user,'from functionnnnnnnnn')
    user_membership = user.active_membership
    print(user_membership)
    service_count = FreelancerService.objects.filter(user=user).count()
    print(service_count,'counttttttttt')
    try:
        if user_membership == 'Basic':
            return service_count < 1
        elif user_membership == 'Extended ':
            return service_count < 5
        elif user_membership == 'Standard':
            return service_count < 10
        else:
            return False

    except Exception:
        return False


class CategoryView(APIView):
    def get(self, request):
        category = Category.objects.all()
        serializer = CategorySerializers(category, many=True)
        return Response(serializer.data)


class ClientJobPosting(APIView):
    def get(self, request):

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
        jobserialize = ClientJobSerializer(jobs, many=True)
        return Response({'jobs': jobserialize.data, 'page': page, 'pages': paginator.num_pages})

    def post(self, request):
        data=request.data
        active_user= data['user']
        user = NewUser.objects.get(id=active_user)
        approval=post_validation(request,user)
        print(approval,'its approvallll')
        if not post_validation(request,user):
            message = 'Buy Membership Or Upgrade Your Membership'
            print('Upgrade Your Membership')
            return Response({
                'Message': message,
                'status': 402
            })
        jobs = ClientJobSerializer(data=request.data)
        if jobs.is_valid():
            jobs.save()
            return Response(200)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class ClientServiceView(APIView):
    def get(self, request):
        service = FreelancerService.objects.all()
        serviceserializer = FreelancerServiceSerializer(service, many=True)

        return Response(serviceserializer.data)


class ClientSingleServiceView(APIView):
    def get(self, request, id):
        print('im hereeeeeeeeeeee')
        service = FreelancerService.objects.get(id=id)
        serviceserializer = ViewFreelancerServiceSerializer(service)
        if serviceserializer.is_valid:
            print(serviceserializer.data, 'dataaaaaaaaaaaaaa')
            return Response(serviceserializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request, id):
        print('review post')
        data = request.data
        user = NewUser.objects.get(id=data['reviewuser'])
        service = FreelancerService.objects.get(id=data['service'])

        if BuyService.objects.filter(getservice=service, user=user).exists():
            print(data, 'its data')
            if ifexist := ServiceRating.objects.filter(
                reviewuser=data['reviewuser'], service=data['service']
            ):
                ifexist.update(
                    title=data['title'], stars=data['stars'], review=data['review'])
                print("updated existing")
                return Response(status=status.HTTP_201_CREATED)
            else:
                review = ServiceRatingSerializer(data=data)
                if review.is_valid():
                    review.save()
                    print('created')
                    return Response(status=status.HTTP_201_CREATED)
                else:
                    print(review.errors, 'fff')
                    return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            print('Need to purchase')
            return Response({'messgage': "You Need to Purchase this Service"}, status=status.HTTP_400_BAD_REQUEST)


class AcceptBid(APIView):
    def post(self, request, id):
        bid = Bids.objects.get(id=id)
        job = ClientJobs.objects.get(id=bid.clientjob.id)
        job.bidder = True
        bid.bidaccepted = True
        job.save()
        bid.save()
        return Response(status=status.HTTP_200_OK)


class ReportService(APIView):
    def post(self, request, id):
        service = FreelancerService.objects.get(id=id)
        service.reported = True
        service.save()
        data = request.data
        report = ServiceReportSerializer(data=data)
        if report.is_valid():
            report.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(report.errors, 'fff')
            return Response(status=status.HTTP_404_NOT_FOUND)


def membership_activation(user, price):
    print('reached memb check')
    amount = int(price)
    current_datetime = datetime.now()
    date = current_datetime + relativedelta(months=1)
    if amount == 120:
        _extracted_from_membership_activation_8( user, 'Basic', date)
    elif amount == 240:
        _extracted_from_membership_activation_8( user, 'Standard', date)
    elif amount == 360:
        _extracted_from_membership_activation_8( user, 'Extended', date)


# TODO Rename this here and in `membership_activation`
def _extracted_from_membership_activation_8( user, active_membership, date):
    updateuser = NewUser.objects.filter(id=user)
    updateuser.update(active_membership=active_membership, membership_expiry=date)


stripe.api_key = settings.STRIPE_SECRET_KEY


class CreateCheckOutSession(APIView):
    def post(self, request):
        print('stripe payment')
        print(request.data,'its all the dataaaaaaaaaaaaaaaaaaaaa')

        try:
            try:
                if request.POST.get('serviceid'):
                    serviceid = request.POST.get('serviceid')
                    price = request.POST.get('price')
                    print(price,'ppppppppppppppppppp')
                    print(serviceid,'sssssssssssssssssssssss')
                    newprice = int(float(price))
                    print('its service pay')
                    checkout_session = stripe.checkout.Session.create(
                        line_items=[
                            {
                                'price_data': {
                                    'currency': 'usd',
                                    'unit_amount': newprice * 100,
                                    'product_data': {
                                        'name': "Buy Service",
                                    },
                                },
                                'quantity': 1,
                            }
                        ],
                        mode='payment',
                        success_url=f'{settings.SITE_URL}freelancer/?success=true&price={price}&type=service&id={serviceid}',
                        cancel_url=f'{settings.SITE_URL}freelancer/?canceled=true',
                    )
                    return redirect(checkout_session.url)
            except:
                pass

            try:
                if request.POST.get('jobid'):
                    jobid = request.POST.get('jobid')
                    price = request.POST.get('price')
                    newprice = int(float(price))
                    print('its job pay')
                    checkout_session = stripe.checkout.Session.create(
                        line_items=[
                            {
                                'price_data': {
                                    'currency': 'usd',
                                    'unit_amount': newprice * 100,
                                    'product_data': {
                                        'name': "Pay Job",
                                    },
                                },
                                'quantity': 1,
                            }
                        ],
                        mode='payment',
                        success_url=f'{settings.SITE_URL}freelancer/?success=true&price={price}&type=job&id={jobid}',
                        cancel_url=f'{settings.SITE_URL}freelancer/?canceled=true',
                    )
                    return redirect(checkout_session.url)
            except:
                pass

            try:
                if request.POST.get('membership'):
                    print('its membership pay')
                    price = request.POST.get('price')
                    newprice = int(float(price))
                    checkout_session = stripe.checkout.Session.create(
                        line_items=[
                            {
                                'price_data': {
                                    'currency': 'usd',
                                    'unit_amount': newprice * 100,
                                    'product_data': {
                                        'name': "Buy Membership",
                                    },
                                },
                                'quantity': 1,
                            }
                        ],
                        mode='payment',
                        success_url=f'{settings.SITE_URL}freelancer/?success=true&price={price}&type=membership',
                        cancel_url=f'{settings.SITE_URL}freelancer/?canceled=true',
                    )
                    return redirect(checkout_session.url)
            except Exception:
                pass

        except Exception as e:
            return Response({'msg': 'something went wrong while creating stripe session', 'error': str(e)}, status=500)


class ServiceStripePayment(APIView):


    def post(self, request):
        print('its service POST')
        data = request.data
        print(data,'from stripe')
        serializeddata = BuyServiceSerializer(data=data)
        if serializeddata.is_valid():
            serializeddata.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializeddata.errors, 'servicestripe errorrrrr')
            return Response(status=status.HTTP_404_NOT_FOUND)

class MembershipStripePayment(APIView):

    def post(self, request):
        print("Its membership POST")
        data = request.data
        print(data, 'paymenttttttttttttttTt')
        user = data['user']
        price = data['price']
        membership_activation(user, price)
        return Response(status=status.HTTP_200_OK)
class JobStripePayment(APIView):

    def post(self, request):
        print("Its Job POST")
        data = request.data
        serializeddata = PayJobSerializer(data=data)
        if serializeddata.is_valid():
            serializeddata.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializeddata.errors, 'job paypal errorrrrr')
            return Response(status=status.HTTP_404_NOT_FOUND)

class PaypalPayment(APIView):
    def post(self, request):
        data = request.data
        print(data, 'paymenttttttttttttttTt')
        user = data['user']
        price = data['price']
        membership_activation(user, price)
        return Response(status=status.HTTP_200_OK)


class ServicePaypalPayment(APIView):

    def post(self, request):
        data = request.data
        serializeddata = BuyServiceSerializer(data=data)
        if serializeddata.is_valid():
            serializeddata.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializeddata.errors, 'servicepaypal errorrrrr')
            return Response(status=status.HTTP_404_NOT_FOUND)


class JobPaypalPayment(APIView):
    def post(self, request):
        data = request.data
        serializeddata = PayJobSerializer(data=data)
        if serializeddata.is_valid():
            serializeddata.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializeddata.errors, 'job paypal errorrrrr')
            return Response(status=status.HTTP_404_NOT_FOUND)


class Freelancer_request(APIView):
    def get(self, request):
        requests = FreelancerRequest.objects.all()
        serializeddata = FreelancerRequestSerializer(requests, many=True)
        if serializeddata.is_valid:
            return Response(serializeddata.data, status=status.HTTP_200_OK)
        print(serializeddata.errors, 'serializer error')
        return Response(status=status.HTTP_404_NOT_FOUND)
    def post(self, request):
        data = request.data
        serializers = PostFreelancerRequestSerializer(data=data)
        if serializers.is_valid():
            serializers.save()
            print('valid')
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializers.errors, 'serializer error')
            return Response(status=status.HTTP_404_NOT_FOUND)

class AcceptRequest(APIView):
    def post(self, request, id):
        updateuser = NewUser.objects.get(id=id)
        updateuser.is_freelancer=True
        updateuser.save()
        return Response(status=status.HTTP_201_CREATED)

class ViewJobPurchase(APIView):
    def get(self, request, id):

        jobs = PayJob.objects.filter(user=id)
        serializeddata = ViewPayJobSerializer(jobs, many=True)
        if serializeddata.is_valid:
            return Response(serializeddata.data, status=status.HTTP_200_OK)
        print(serializeddata.errors, 'serializer error')
        return Response(status=status.HTTP_404_NOT_FOUND)


class ViewServicePurchase(APIView):
    def get(self, request, id):
        print('reached service purchase')
        print(id)
        service = BuyService.objects.filter(user=id)
        serializeddata = ViewBuyServiceSerializer(service, many=True)
        if serializeddata.is_valid:
            return Response(serializeddata.data, status=status.HTTP_200_OK)
        print(serializeddata.errors, 'serializer error')
        return Response(status=status.HTTP_404_NOT_FOUND)
