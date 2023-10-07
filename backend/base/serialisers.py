from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Guitar

class GuitarSerialiser(serializers.ModelSerializer):
  class Meta:
    model = Guitar
    fields = '__all__'