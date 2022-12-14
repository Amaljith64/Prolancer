from rest_framework import serializers
from .models import Category,ClientJobs,JobReport,PayJob
from accounts.models import NewUser

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = "__all__"


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model= Category
        fields = "__all__"

class ClientJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientJobs
        fields = "__all__"

class ClientJobViewSerializer(serializers.ModelSerializer):
    user = UserAccountSerializer(
        read_only=True)
   
    class Meta:
        model = ClientJobs
        fields = "__all__"

class JobReportSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobReport
        fields = "__all__"


class PayJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = PayJob
        fields = '__all__'