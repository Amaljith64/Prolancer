from django.urls import path

from.views import *


urlpatterns = [

    path('chatlist/',ChatPage.as_view(),name='chatlist'),
    path('chatdata/',ChatData.as_view(),name='chatdata'),
    

]