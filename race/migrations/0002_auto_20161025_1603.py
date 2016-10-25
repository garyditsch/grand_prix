# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('race', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='race',
            name='user',
        ),
        migrations.AlterField(
            model_name='race',
            name='race_director',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='race',
            name='website',
            field=models.CharField(blank=True, max_length=75),
        ),
    ]
