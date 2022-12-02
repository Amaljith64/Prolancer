from django.urls import path,include
from .views import *
from . import views



urlpatterns = [
    
   
    path('postservice/',views.FreelanceServicePosting.as_view(),name="postservice"),
    path('viewservice/<int:id>',views.FreelanceServiceView.as_view(),name="viewservice"),
    path('sentbid/',views.SentBid.as_view(),name="sentbid"),
   
]