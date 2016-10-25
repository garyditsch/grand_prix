# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='result',
            name='firstname',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='result',
            name='lastname',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
