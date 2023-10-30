# tags/models.py
from django.db import models

# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Tag"
        verbose_name_plural = "Tags"


