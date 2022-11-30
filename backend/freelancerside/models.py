from django.db import models
from accounts.models import NewUser
from clientside.models import Category

# Create your models here.



class FreelancerService(models.Model):
    user = models.ForeignKey(NewUser,on_delete=models.CASCADE)
    service_title = models.CharField(max_length=225)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    Price = models.IntegerField()
    response_time = models.IntegerField()
    skills = models.CharField(max_length=225)
    language = models.CharField(max_length=225)
    service_description = models.TextField()
    img = models.ImageField(upload_to='image',null=True)

    def __str__(self):
        return self.service_title
    
