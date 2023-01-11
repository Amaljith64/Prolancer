from django.db import models
from accounts.models import NewUser
from clientside.models import Category

# Create your models here.



class FreelancerService(models.Model):
    user = models.ForeignKey(NewUser,on_delete=models.CASCADE,related_name='getservice')
    service_title = models.CharField(max_length=225)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    Price = models.IntegerField()
    response_time = models.IntegerField()
    skills = models.CharField(max_length=225)
    language = models.CharField(max_length=225)
    service_description = models.TextField()
    img = models.ImageField(upload_to='image',null=True)
    servicetime = models.DateTimeField(auto_now_add=True)
    reported = models.BooleanField(default= False,null=True)
    expired = models.BooleanField(default= False,null=True)
    expiry_on = models.DateTimeField(null=True)

    def __str__(self):
        return self.service_title
    
class ServiceRating(models.Model):
    reviewuser = models.ForeignKey(NewUser,on_delete=models.CASCADE)
    service = models.ForeignKey(FreelancerService,on_delete=models.CASCADE,related_name='reviewed_user_details')
    stars = models.IntegerField()
    title = models.CharField(max_length=225)
    review = models.TextField()
    reviewtime = models.DateTimeField(auto_now_add=True)

class ServiceReport(models.Model):
    reportuser = models.ForeignKey(NewUser,on_delete=models.CASCADE)
    service = models.ForeignKey(FreelancerService,on_delete=models.CASCADE)
    reportedtime = models.DateTimeField(auto_now_add=True)


class BuyService(models.Model):
    getservice = models.ForeignKey(FreelancerService,on_delete=models.CASCADE)
    user = models.ForeignKey(NewUser,on_delete=models.CASCADE)
    price = models.IntegerField()
    payment_method = models.CharField(max_length=225)