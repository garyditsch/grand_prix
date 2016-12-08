# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('race', '0005_race_grand_prix_race'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='average',
            field=models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True),
        ),
    ]
