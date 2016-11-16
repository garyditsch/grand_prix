# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0004_remove_result_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='result',
            name='time',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
