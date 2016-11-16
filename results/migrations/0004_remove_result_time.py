# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0003_auto_20161025_1725'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='result',
            name='time',
        ),
    ]
