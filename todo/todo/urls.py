from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from app1.views import Todo

from tastypie.api import Api
from app1.api.resources import TodoResource

v1_api = Api(api_name='v1')
v1_api.register(TodoResource())


urlpatterns = patterns('',
    # Examples:
    url(r'^$', Todo.as_view(), name='home'),
    url(r'^api/', include(v1_api.urls)),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
