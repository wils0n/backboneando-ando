from django.db import models

class Todo(models.Model):
	title = models.CharField(max_length=50)
	description = models.TextField()
	status = models.BooleanField(default=False)
