# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0002_auto_20161025_1603'),
    ]

    operations = [
        migrations.AlterField(
            model_name='result',
            name='time',
            field=models.DurationField(),
        ),
    ]
