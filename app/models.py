from django.db import models

class Post(models.Model):
	title = models.CharField('title', max_length=50)
	description = models.CharField('description', max_length=500, null=True)
	image = models.ImageField(upload_to='images', verbose_name='image')
	content = models.TextField('content')
	created_at = models.DateTimeField('created_at', auto_now_add=True)
	updated_at = models.DateField('updated_at', auto_now=True)

	def __str__(self):
		return self.title