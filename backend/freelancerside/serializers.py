from rest_framework import serializers
from .models import *


class FreelancerServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerService
        fields = "__all__"