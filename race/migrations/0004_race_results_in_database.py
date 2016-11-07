# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('race', '0003_race_date_added'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='results_in_database',
            field=models.BooleanField(default=False),
        ),
    ]
