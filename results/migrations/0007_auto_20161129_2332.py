# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0006_result_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='result',
            name='firstname',
            field=models.CharField(max_length=50, blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='result',
            name='gender',
            field=models.CharField(max_length=2, blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='result',
            name='lastname',
            field=models.CharField(max_length=50, blank=True, null=True),
        ),
    ]
