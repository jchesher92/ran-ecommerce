from django.contrib import admin
from django.urls import path, include, re_path # <-- added this new import re_path
from .views import index # <-- also new

urlpatterns = [
    #...your other views,
    re_path(r'^.*$', index) # <-- have this come last using re path.
]