
from django.contrib import admin
from django.urls import path,include
from .views import *
from . import views
from rest_framework.routers import DefaultRouter



urlpatterns = [
    
    path('',views.CategoryView.as_view(),name="home"),
    path('postjob/',views.ClientJobPosting.as_view(),name="postjob"),
   
]

# router = DefaultRouter()
# router.register('category',GetCategory,basename='category')

# urlpatterns = router.urls