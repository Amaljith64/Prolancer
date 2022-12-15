from django.db import models
from accounts.models import *

# Create your models here.


class Category(models.Model):

    category_name = models.CharField(max_length=225)
    slug = models.SlugField(max_length=100,unique=True,null=True)
    category_image = models.FileField(upload_to='images/category')

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):

        return self.category_name  



class ClientJobs(models.Model):
    user = models.ForeignKey(NewUser,on_delete=models.CASCADE,related_name='clientjob')
    job_title = models.CharField(max_length=225)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    min_budget = models.IntegerField()
    max_budget = models.IntegerField()
    skill_required = models.CharField(max_length=225)
    job_description = models.TextField()
    img = models.ImageField(upload_to='image',null=True)
    jobtime = models.DateTimeField(auto_now_add=True)
    bidder = models.BooleanField(default= False,null=True)
    reported = models.BooleanField(default= False,null=True)
    

    def __str__(self):
        return self.job_title

class JobReport(models.Model):
    reportuser = models.ForeignKey(NewUser,on_delete=models.CASCADE)
    job = models.ForeignKey(ClientJobs,on_delete=models.CASCADE)
    reportedtime = models.DateTimeField(auto_now_add=True)



class Bids(models.Model):
    clientjob = models.ForeignKey(ClientJobs,on_delete=models.CASCADE)
    user = models.ForeignKey(NewUser,on_delete=models.CASCADE)
    bidrate = models.IntegerField()
    daysrequired = models.IntegerField()
    bidtime = models.DateTimeField(auto_now_add=True)
    bidaccepted = models.BooleanField(default=False,null=True)


    


    
