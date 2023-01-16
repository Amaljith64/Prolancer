from rest_framework import serializers
from .models import Category, ClientJobs, JobReport, PayJob, FreelancerRequest
from accounts.models import NewUser


class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = "__all__"


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
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


class ViewPayJobSerializer(serializers.ModelSerializer):
    clientjob = ClientJobSerializer(many=True, read_only=True)
    user = UserAccountSerializer(read_only=True)

    class Meta:
        model = PayJob
        fields = '__all__'


class FreelancerRequestSerializer(serializers.ModelSerializer):
    requested_user = UserAccountSerializer(read_only=True)

    class Meta:
        model = FreelancerRequest
        fields = '__all__'
class PostFreelancerRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = FreelancerRequest
        fields = '__all__'
