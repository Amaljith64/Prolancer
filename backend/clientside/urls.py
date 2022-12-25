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

   
]

