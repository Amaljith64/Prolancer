from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(NewUser)

admin.site.register(Userprofile)
admin.site.register(Education)
admin.site.register(Experience)