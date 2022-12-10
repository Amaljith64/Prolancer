from django.urls import path,include
from .views import *
from . import views



urlpatterns = [
    
   
    path('postservice/',views.FreelanceServicePosting.as_view(),name="postservice"),
    path('viewjob/<int:id>',views.FreelanceJobView.as_view(),name="viewservice"),
    path('sentbid/',views.SentBid.as_view(),name="sentbid"),
    path('reportjob/<int:id>/',views.ReportJob.as_view(),name="reportjob"),

   
]