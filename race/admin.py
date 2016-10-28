from django.contrib import admin

# Register your models here.

from .models import Race


class RaceAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'date', 'distance', 'website', 'race_director')


admin.site.register(Race, RaceAdmin)