from django.urls import path
from . import views

urlpatterns = [
    
    path('',views.AdminPanel.as_view(),name="adminhome"),

]