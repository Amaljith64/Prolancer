from rest_framework import serializers
from .models import *


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model= Category
        fields = "__all__"

class ClientJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientJobs
        fields = "__all__"