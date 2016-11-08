from django.contrib import admin

# Register your models here.

from .models import Race


class RaceAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'date', 'distance', 'website',  'race_director', 'grand_prix_race', 'results_in_database', 'date_added')


admin.site.register(Race, RaceAdmin)