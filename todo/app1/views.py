from django.shortcuts import render

from django.views.generic import TemplateView

class Todo(TemplateView):
	template_name = 'index.html'
