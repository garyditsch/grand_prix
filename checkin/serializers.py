from rest_framework import serializers
from .models import Checkin

class CheckinSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Checkin
        fields = ('id', 'race', 'checkin_bib', 'score', 'email', 'firstname', 'lastname', 'checkin_date')
