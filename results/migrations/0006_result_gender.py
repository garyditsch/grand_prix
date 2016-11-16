# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0005_result_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='result',
            name='gender',
            field=models.CharField(max_length=2, blank=True),
        ),
    ]
