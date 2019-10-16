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
    url(r'^/api/', include('server.api.urls')),
    url(r'^/auth/', include('rest_auth.urls')),
    url(r'^/admin/', admin.site.urls),
    url(r'^/registration/', include('rest_auth.registration.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('/', TemplateView.as_view(template_name='index.html')),
    url(r'.visualize/', TemplateView.as_view(template_name='home.html')),
    url(r'.django_plotly_dash/', include('django_plotly_dash.urls')),
    url(r'.line', TemplateView.as_view(template_name='line.html')),
    url(r'.scatter', TemplateView.as_view(template_name='scatter.html')),
    url(r'.bar', TemplateView.as_view(template_name='bar.html')),
    url(r'.statistics',views.statistics),
    #url(r'^/visualize/', TemplateView.as_view(template_name='home.html')),
    #url(r'^/django_plotly_dash/', include('django_plotly_dash.urls')),
    #url(r'^/line', TemplateView.as_view(template_name='line.html')),
    #url(r'^/scatter', TemplateView.as_view(template_name='scatter.html')),
    #url(r'^/bar', TemplateView.as_view(template_name='bar.html')),
    #url(r'^/statistics',views.statistics)
]
