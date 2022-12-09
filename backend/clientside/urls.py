from django.urls import path,include
from . import views



urlpatterns = [
    
    path('',views.CategoryView.as_view(),name="home"),
    path('postjob/',views.ClientJobPosting.as_view(),name="postjob"),
    path('viewservice/',views.ClientServiceView.as_view(),name="viewservice"),
    path('viewsingleservice/<int:id>/',views.ClientSingleServiceView.as_view(),name="viewsingleservice"),
   
]

# router = DefaultRouter()
# router.register('category',GetCategory,basename='category')

# urlpatterns = router.urls