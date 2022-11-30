from django.urls import path,include
from .views import *
from . import views



urlpatterns = [
    
   
    path('postservice/',views.FreelanceServicePosting.as_view(),name="postservice"),
   
]