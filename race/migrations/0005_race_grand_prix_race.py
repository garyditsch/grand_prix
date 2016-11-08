# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('race', '0004_race_results_in_database'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='grand_prix_race',
            field=models.BooleanField(default=False),
        ),
    ]
