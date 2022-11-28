from rest_framework.serializers import ModelSerializer
from accounts.models import *


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class EducationSerializer(ModelSerializer):

    class Meta:
        model = Education
        # fields = ['user','university','department','remark','start_date','end_date',]
        fields = '__all__'


class ExperienceSerializer(ModelSerializer):

    class Meta:
        model = Experience
        fields = '__all__'

        # fields = ['user','company','position','description','start_date_e','end_date_e']

class UserprofileSerializer(ModelSerializer):
    
    educations = EducationSerializer()
    experiences = ExperienceSerializer()

    class Meta:
        model = Userprofile
        fields = '__all__'

        # fields = ['user','first_name','last_name','date_of_birth','profile_photo','cv','about']


    def create(self, validated_data):
        print('............b...................')
        educations = validated_data.pop('educations')
        experiences = validated_data.pop('experiences')
        profile = Userprofile.objects.create(**validated_data)
        for education in educations:
            Education.objects.create(user=profile, **education)
        for experience in experiences:
            Experience.objects.create(user=profile, **experience)
        return profile


