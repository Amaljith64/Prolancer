from django.urls import path,include
from . import views
from django.views.decorators.csrf import csrf_exempt
from .views import CreateCheckOutSession




urlpatterns = [
    
    path('',views.CategoryView.as_view(),name="home"),
    path('postjob/',views.ClientJobPosting.as_view(),name="postjob"),
    path('viewservice/',views.ClientServiceView.as_view(),name="viewservice"),
    path('viewsingleservice/<int:id>/',views.ClientSingleServiceView.as_view(),name="viewsingleservice"),
    path('accceptbid/<int:id>/',views.AcceptBid.as_view(),name="accceptbid"),
    path('reportservice/<int:id>/',views.ReportService.as_view(),name="reportservice"),
    path('create-checkout-session/', csrf_exempt(CreateCheckOutSession.as_view()), name='checkout_session'),    
    path('paypalpayment/', views.PaypalPayment.as_view(), name='paypalpayment'),    
    path('paypalservicepayment/', views.ServicePaypalPayment.as_view(), name='paypalservicepayment'),    
    path('paypaljobpayment/', views.JobPaypalPayment.as_view(), name='paypaljobpayment'),    
    path('freelancerrequest/', views.Freelancer_request.as_view(), name='freelancerrequest'), 
    path('acceptrequest/<int:id>/', views.AcceptRequest.as_view(), name='acceptrequest'),


    path('viewjobpurchase/<int:id>/', views.ViewJobPurchase.as_view(), name='viewjobpurchase'),    
    path('viewservicepurchase/<int:id>/', views.ViewServicePurchase.as_view(), name='viewservicepurchase'),  

    path('strpiemembershippayment/', views.MembershipStripePayment.as_view(), name='strpiemembershippayment'),    
    path('stripeservicepayment/', views.ServiceStripePayment.as_view(), name='stripeservicepayment'),    
    path('stripejobpayment/', views.JobStripePayment.as_view(), name='stripejobpayment'),      

   
]

