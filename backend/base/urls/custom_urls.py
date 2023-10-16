from django.urls import path, include, re_path
from base.views import custom_views as views

urlpatterns = [
  path('create/', views.createCustomGuitar, name="custom-guitar-create"),
]