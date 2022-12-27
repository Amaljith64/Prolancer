from rest_framework import serializers
from .models import FreelancerService, ServiceRating,ServiceReport,BuyService
from clientside.models import Bids
from clientside.serializer import UserAccountSerializer



class ServiceRatingSerializer(serializers.ModelSerializer):
    reviewuser=UserAccountSerializer(read_only=True)
    class Meta:
        model =ServiceRating
        fields = "__all__"
        
class FreelancerServiceSerializer(serializers.ModelSerializer):
    user=UserAccountSerializer(read_only=True)
    reviewed_user_details = ServiceRatingSerializer(read_only = True,many=True)
    class Meta:
        model = FreelancerService
        fields = "__all__"



class BidSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Bids
        fields = "__all__"
class BidViewSerializer(serializers.ModelSerializer):
    user = UserAccountSerializer(
        read_only=True)
    
    class Meta:
        model = Bids
        fields = "__all__"


class ServiceReportSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceReport
        fields = "__all__"

class BuyServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = BuyService
        fields = '__all__'