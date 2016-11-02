from django.contrib import admin

# Register your models here.

from .models import Checkin


class CheckinAdmin(admin.ModelAdmin):
    list_display = ('race', 'checkin_bib', 'score', 'email', 'firstname', 'lastname', 'checkin_date')


admin.site.register(Checkin, CheckinAdmin)