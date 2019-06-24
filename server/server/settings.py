
from __future__ import absolute_import, unicode_literals
# ^^^ The above is required if you want to import from the celery
# library.  If you don't have this then `from celery.schedules import`
# becomes `proj.celery.schedules` in Python 2.x since it allows
# for relative imports by default.

# Celery settings

# CELERY_BROKER_URL = 'amqp://guest:guest@localhost//'
CELERY_BROKER_URL = 'pyamqp://guest@localhost//'

#: Only add pickle to this list if your broker is secured
#: from unwanted access (see userguide/security.html)
# CELERY_ACCEPT_CONTENT = ['json']

# CELERY_RESULT_BACKEND = 'db+sqlite:////home/tinto/Workspace/CUBS/vue-django-rest-auth/server/results.sqlite'
CELERY_RESULT_BACKEND = 'db+sqlite:////home/sahmed9/Documents/reps/chemml/web/vue-django-rest-auth/server/results.sqlite'

# CELERY_RESULT_BACKEND = 'redis://localhost'
# CELERY_TASK_SERIALIZER = 'json'

# CELERY_RESULT_BACKEND = 'django-db'
CELERY_RESULT_PERSISTENT = True


"""
For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
CLIENT_DIST_DIR = os.path.join(BASE_DIR, '..', 'client', 'dist')

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret
SECRET_KEY = 'ma3c@7uu!%e0=tynp+i6+q%$)9v@$t(eulqurym_b=48z82&5n'

# SECURITY WARNING: don't run with debug turned on in production
DEBUG = True

ALLOWED_HOSTS = ['localhost', '10.84.69.48', '128.205.33.82']

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',

    'django.contrib.auth',              # Django auth
    'django.contrib.contenttypes',      # Django auth

    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',

    'rest_framework',
    'rest_framework.authtoken',         # token authentication
    'rest_auth',

    'allauth',
    'allauth.account',
    'rest_auth.registration',
    'server.api',
    'django_celery_results',
)

MIDDLEWARE = (
    'django.contrib.sessions.middleware.SessionMiddleware',         # Django auth

    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',

    'django.contrib.auth.middleware.AuthenticationMiddleware',      # Django auth

    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'django.middleware.security.SecurityMiddleware',
)

# For backwards compatibility for Django 1.8
MIDDLEWARE_CLASSES = MIDDLEWARE

ROOT_URLCONF = 'server.urls'

WSGI_APPLICATION = 'server.wsgi.application'

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(CLIENT_DIST_DIR, 'static')]

TEMPLATE_DIRS = [
    CLIENT_DIST_DIR,
    os.path.join(BASE_DIR, 'templates')
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': TEMPLATE_DIRS,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

REST_SESSION_LOGIN = True
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
SITE_ID = 1


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    )
}

# AUTH_USER_MODEL = 'api.User'

# SECURITY WARNING: don't use AlwaysRootBackend in production
# AUTHENTICATION_BACKENDS = ['server.auth.AlwaysRootBackend']

# Django allauth (account registration email flow)
# http://django-allauth.readthedocs.io/en/latest/configuration.html

ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_AUTHENTICATION_METHOD = 'username'
ACCOUNT_EMAIL_VERIFICATION = 'optional'


