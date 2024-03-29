from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from accounts.views import UserProfile,AllUsers,EducationView,EditEducationView
from .helpers import resend_verification_credentials,otp_verify,otp_verify_for_password

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('signup/',views.Usersignup.as_view(),name="signup"),
    path('checkusername/',views.CheckUsername.as_view(),name="checkusername"),
    path('passwordotpverify/',otp_verify_for_password,name='passwordotpverify'),
    path('changepassword/',views.ChangePassword.as_view(),name="changepassword"),

    path('googlesignin/',views.GoogleSignup.as_view(),name="googlesignin"),
    path('sentotp/',resend_verification_credentials,name='sentotp'),
    path('verifyotp/',otp_verify,name='verifyotp'),

    path('userprofile/<int:id>/',UserProfile.as_view(),name='userprofile'),
    path('education/',EducationView.as_view(),name='education'),
    path('editeducation/<int:id>/',EditEducationView.as_view(),name='editeducation'),
    path('allusers/',AllUsers.as_view(),name='allusers'),
]
