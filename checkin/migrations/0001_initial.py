# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings
import datetime


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('race', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Checkin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('checkin_bib', models.IntegerField()),
                ('score', models.IntegerField(null=True, blank=True)),
                ('checkin_date', models.DateTimeField(default=datetime.datetime.now)),
                ('email', models.ForeignKey(null=True, to=settings.AUTH_USER_MODEL, blank=True)),
                ('race', models.ForeignKey(to='race.Race')),
            ],
        ),
    ]
