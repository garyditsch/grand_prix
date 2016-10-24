from .base import *

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'grand_prix',
        'USER': 'garyditsch',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '',
    }
}

DEBUG = True
