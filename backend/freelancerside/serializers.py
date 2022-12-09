from rest_framework import serializers
from .models import FreelancerService, ServiceRating
from clientside.models import Bids
from clientside.serializer import UserAccountSerializer


class FreelancerServiceSerializer(serializers.ModelSerializer):
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

class ServiceRatingSerializer(serializers.ModelSerializer):
    user = UserAccountSerializer(read_only=True)
    class Meta:
        model =ServiceRating
        fields = "__all__"
        