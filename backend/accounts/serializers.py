from rest_framework import serializers
from . models import *
from clientside.serializer import ClientJobSerializer



class EducatationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'
class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'
class UserprofileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userprofile
        fields = '__all__'

class FullProfileSerializer(serializers.ModelSerializer):
    clientjob = ClientJobSerializer(read_only = True,many = True)
    pro_user_set = UserprofileSerializer(read_only = True,many = True)
    experiences = ExperienceSerializer(read_only = True,many = True)
    educations = EducatationSerializer(read_only = True,many = True)
    class Meta:
        model = NewUser
        fields = '__all__'

   

