# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0007_auto_20161129_2332'),
    ]

    operations = [
        migrations.AlterField(
            model_name='result',
            name='bib',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
