from django.contrib import admin
from .models import FreelancerService
from clientside.models import Bids

# Register your models here.

admin.site.register(FreelancerService)
admin.site.register(Bids)
