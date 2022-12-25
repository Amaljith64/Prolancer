from django.contrib import admin
from .models import FreelancerService,ServiceRating,ServiceReport,BuyService
from clientside.models import Bids

# Register your models here.

class BidsAdmin(admin.ModelAdmin):
    list_display = ('user', 'clientjob', 'bidaccepted','bidtime')
admin.site.register(FreelancerService)
admin.site.register(Bids,BidsAdmin)
admin.site.register(ServiceRating)
admin.site.register(ServiceReport)
admin.site.register(BuyService)



