from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Guitar, Review, CustomGuitar

class UserSerialiser(serializers.ModelSerializer):
  name = serializers.SerializerMethodField(read_only=True)
  _id = serializers.SerializerMethodField(read_only=True)
  isAdmin = serializers.SerializerMethodField(read_only=True)

  class Meta:
    model = User
    fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

  def get__id(self, obj):
    return obj.id

  def get_isAdmin(self, obj):
    return obj.is_staff
  
  def get_name(self, obj):
    name = obj.first_name
    if name == '' :
      name = obj.email
    return name
  
class UserSerialiserWithToken(UserSerialiser):
  token = serializers.SerializerMethodField(read_only=True)

  class Meta:
    model = User
    fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

  def get_token(self, obj):
    token = RefreshToken.for_user(obj)
    return str(token.access_token)

class ReviewSerialiser(serializers.ModelSerializer):
  class Meta:
    model = Review
    fields = '__all__'

class GuitarSerialiser(serializers.ModelSerializer):
  reviews = serializers.SerializerMethodField(read_only=True)

  class Meta:
    model = Guitar
    fields = '__all__'

  def get_reviews(self, obj):
    reviews = obj.review_set.all()
    serializer = ReviewSerialiser(reviews, many=True)
    return serializer.data

class CustomSerialiser(serializers.ModelSerializer):
  class Meta:
    model = CustomGuitar
    fields = '__all__'
