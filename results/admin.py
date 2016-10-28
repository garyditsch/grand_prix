from django.contrib import admin

# Register your models here.

from .models import Result


class ResultAdmin(admin.ModelAdmin):
    list_display = ('race', 'firstname', 'lastname', 'age', 'time', 'claim', 'user')


admin.site.register(Result, ResultAdmin)