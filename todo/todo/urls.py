from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from app1.views import Todo
urlpatterns = patterns('',
    # Examples:
    url(r'^$', Todo.as_view(), name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
