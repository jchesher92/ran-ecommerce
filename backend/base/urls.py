from django.urls import path
from . import views

urlpatterns = [
  path('', views.getRoutes, name="routes"),
  path('guitars/', views.getGuitars, name="guitars"),
  path('guitars/<str:pk>', views.getGuitar, name="guitar"),
]