from django.contrib import admin
from .models import *
# Register your models here.

class ClientJobsAdmin(admin.ModelAdmin):
    list_display = ('job_title','bidder')

admin.site.register(Category)
admin.site.register(ClientJobs,ClientJobsAdmin)
admin.site.register(PayJob)



