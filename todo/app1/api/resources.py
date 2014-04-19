from tastypie.resources import ModelResource
from tastypie.authorization import Authorization

from app1.models import Todo


class TodoResource(ModelResource):
    
    class Meta:
        queryset = Todo.objects.all()
        resource_name = 'todo'
        allowed_methods = ['get', 'delete', 'post', 'put']
        authorization = Authorization()