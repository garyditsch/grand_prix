from rest_framework import serializers
from .models import Race

class RaceSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Race
        fields = ('id', 'name', 'date', 'distance', 'website', 'race_director', 'grand_prix_race', 'results_in_database', 'date_added')

