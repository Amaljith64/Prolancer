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
    user = models.ForeignKey(NewUser,on_delete=models.CASCADE)
    job_title = models.CharField(max_length=225)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    min_budget = models.IntegerField()
    max_budget = models.IntegerField()
    skill_required = models.CharField(max_length=225)
    job_description = models.TextField()
    img = models.ImageField(upload_to='image',null=True)
    
