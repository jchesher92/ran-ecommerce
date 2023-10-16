from django.urls import path
from base.views import guitar_views as views

urlpatterns = [

  path('', views.getGuitars, name="guitars"),
  path('<str:pk>/reviews/', views.createGuitarReview, name="create-review"),
  path('top/', views.getTopGuitars, name="topGuitars"),
  path('<str:pk>', views.getGuitar, name="guitar"),
  # re_path(r'^.*$', index),
]