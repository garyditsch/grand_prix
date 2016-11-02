# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkin', '0002_auto_20161025_1603'),
    ]

    operations = [
        migrations.AddField(
            model_name='checkin',
            name='firstname',
            field=models.CharField(max_length=50, blank=True, null=True),
        ),
        migrations.AddField(
            model_name='checkin',
            name='lastname',
            field=models.CharField(max_length=50, blank=True, null=True),
        ),
    ]
