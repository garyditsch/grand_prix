from rest_framework import serializers
from .models import Race

class RaceSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Race
        fields = ('name', 'date', 'distance', 'website', 'race_director')

