# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('race', '0002_auto_20161025_1603'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='date_added',
            field=models.DateField(default=datetime.datetime(2016, 11, 7, 18, 31, 28, 388742, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
