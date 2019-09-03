from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path,re_path
from server.api import views
urlpatterns = [
    url(r'^api/', include('server.api.urls')),
    url(r'^auth/', include('rest_auth.urls')),
    url(r'^registration/', include('rest_auth.registration.urls')),
    url(r'^admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('visualize/', TemplateView.as_view(template_name='home.html')),
    path('django_plotly_dash/', include('django_plotly_dash.urls')),
    path('line', TemplateView.as_view(template_name='line.html')),
    path('scatter', TemplateView.as_view(template_name='scatter.html')),
    path('bar', TemplateView.as_view(template_name='bar.html')),
    re_path(r'^statistics',views.statistics)
]
