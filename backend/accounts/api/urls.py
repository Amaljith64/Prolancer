from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from accounts.views import UserProfile,AllUsers

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    path('notes/', views.getNotes),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('signup/',views.Usersignup.as_view(),name="signup"),

    path('userprofile/<int:id>/',UserProfile.as_view(),name='userprofile'),
    path('allusers/',AllUsers.as_view(),name='allusers')
]
