from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Guitar(models.Model):
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  name = models.CharField(max_length=200, null=True, blank=True)
  image = models.ImageField(null=True, blank=True)
  description = models.TextField(null=True, blank=True)

  # SPECIFICATIONS
  bodyShape = models.CharField(max_length=200, null=True, blank=True)
  construction = models.CharField(max_length=200, null=True, blank=True)
  scaleLength = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)
  bodyMaterial = models.CharField(max_length=200, null=True, blank=True)
  finish = models.CharField(max_length=200, null=True, blank=True)
  headstockShape = models.CharField(max_length=200, null=True, blank=True)
  neckMaterial = models.CharField(max_length=200, null=True, blank=True)
  fingerboardMaterial = models.CharField(max_length=200, null=True, blank=True)
  numOfFrets = models.IntegerField(null=True, blank=True, default=0)
  fretSize = models.CharField(max_length=200, null=True, blank=True)
  inlays = models.CharField(max_length=200, null=True, blank=True)
  sideInlays = models.CharField(max_length=200, null=True, blank=True)
  nut = models.CharField(max_length=200, null=True, blank=True)
  hardwareColour = models.CharField(max_length=200, null=True, blank=True)
  bridgeSystem = models.CharField(max_length=200, null=True, blank=True)
  tuningMachines = models.CharField(max_length=200, null=True, blank=True)
  straps = models.CharField(max_length=200, null=True, blank=True)
  pickups = models.CharField(max_length=200, null=True, blank=True)
  controls = models.CharField(max_length=200, null=True, blank=True)
  otherControls = models.CharField(max_length=200, null=True, blank=True)

  # NECK SPECIFICATIONS
  widthAtNutand24thFret = models.CharField(max_length=200, null=True, blank=True)
  thicknessAt1stand12thFret = models.CharField(max_length=200, null=True, blank=True)
  fingerboardRadius = models.IntegerField(null=True, blank=True, default=0)
  backShape = models.CharField(max_length=200, null=True, blank=True)

  # STORE DETAILS
  rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
  numReviews = models.IntegerField(null=True, blank=True, default=0)
  price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
  countInStock = models.IntegerField(null=True, blank=True, default=0)
  createdAt = models.DateTimeField(auto_now_add=True)
  _id = models.AutoField(primary_key=True, editable=False)

  def __str__(self):
    return self.name
  
class Review(models.Model):
  guitar = models.ForeignKey(Guitar, on_delete=models.SET_NULL, null=True)
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  name = models.CharField(max_length=200, null=True, blank=True)
  rating = models.IntegerField(null=True, blank=True, default=0)
  comment = models.TextField(null=True, blank=True)
  createdAt = models.DateTimeField(auto_now_add=True)
  _id = models.AutoField(primary_key=True, editable=False)

  def __str__(self):
    return str(self.rating)
  
class Order(models.Model):
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  paymentMethod = models.CharField(max_length=200, null=True, blank=True)
  taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
  shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
  totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
  isPaid = models.BooleanField(default=False)
  paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
  isDelivered = models.BooleanField(default=False)
  deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
  createdAt = models.DateTimeField(auto_now_add=True)
  _id = models.AutoField(primary_key=True, editable=False)

  def __str__(self):
    return str(self.createdAt)

class OrderItem(models.Model):
  guitar = models.ForeignKey(Guitar, on_delete=models.SET_NULL, null=True)
  order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
  name = models.CharField(max_length=200, null=True, blank=True)
  qty = models.IntegerField(null=True, blank=True, default=0)
  price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
  image = models.CharField(max_length=200, null=True, blank=True)
  _id = models.AutoField(primary_key=True, editable=False)

  def __str__(self):
    return str(self.name)
  
class ShippingAddress(models.Model):
  order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
  address = models.CharField(max_length=200, null=True, blank=True)
  city = models.CharField(max_length=200, null=True, blank=True)
  postcode = models.CharField(max_length=200, null=True, blank=True)
  country = models.CharField(max_length=200, null=True, blank=True)
  shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
  _id = models.AutoField(primary_key=True, editable=False)

  def __str__(self):
    return str(self.address)
  


class CustomGuitar(models.Model):
  # SPECIFICATIONS
  numOfStrings = models.CharField(max_length=200, null=True, blank=True)
  rlHanded = models.CharField(max_length=200, null=True, blank=True)
  scaleLength = models.CharField(max_length=200, null=True, blank=True)
  construction = models.CharField(max_length=200, null=True, blank=True)
  bodyShape = models.CharField(max_length=200, null=True, blank=True)
  bodyMaterial = models.CharField(max_length=200, null=True, blank=True)
  topWoodOptions = models.CharField(max_length=200, null=True, blank=True)
  bodyBinding = models.CharField(max_length=200, null=True, blank=True)
  bindingMaterial = models.CharField(max_length=200, null=True, blank=True)
  finish = models.CharField(max_length=200, null=True, blank=True)
  headstockShape = models.CharField(max_length=200, null=True, blank=True)
  headstock = models.CharField(max_length=200, null=True, blank=True)
  headstockFinish = models.CharField(max_length=200, null=True, blank=True)
  headstockBinding = models.CharField(max_length=200, null=True, blank=True)
  trussRodCover = models.CharField(max_length=200, null=True, blank=True)
  logo = models.CharField(max_length=200, null=True, blank=True)
  neckMaterial = models.CharField(max_length=200, null=True, blank=True)
  neckShape = models.CharField(max_length=200, null=True, blank=True)
  nutWidth6 = models.CharField(max_length=200, null=True, blank=True)
  nutWidth7 = models.CharField(max_length=200, null=True, blank=True)
  nutWidth8 = models.CharField(max_length=200, null=True, blank=True)
  thicknessAt1stand12thFret = models.CharField(max_length=200, null=True, blank=True)
  neckFinish = models.CharField(max_length=200, null=True, blank=True)
  # fingerboardMaterial = models.CharField(max_length=200, null=True, blank=True)
  # fingerboardBinding = models.CharField(max_length=200, null=True, blank=True)
  # numOfFrets = models.IntegerField(null=True, blank=True, default=0)
  # fretSize = models.CharField(max_length=200, null=True, blank=True)
  # fingerboardRadius = models.IntegerField(null=True, blank=True, default=0)
  # inlays = models.CharField(max_length=200, null=True, blank=True)
  # customInlays = models.CharField(max_length=200, null=True, blank=True)
  # sideInlays = models.CharField(max_length=200, null=True, blank=True)
  # nut = models.CharField(max_length=200, null=True, blank=True)
  # hardwareColour = models.CharField(max_length=200, null=True, blank=True)
  # bridgeSystem6 = models.CharField(max_length=200, null=True, blank=True)
  # bridgeSystem7 = models.CharField(max_length=200, null=True, blank=True)
  # bridgeSystem8 = models.CharField(max_length=200, null=True, blank=True)
  # tuningMachines = models.CharField(max_length=200, null=True, blank=True)
  # straplocks = models.CharField(max_length=200, null=True, blank=True)
  # neckPickup = models.CharField(max_length=200, null=True, blank=True)
  # middlePickup = models.CharField(max_length=200, null=True, blank=True)
  # bridgePickup = models.CharField(max_length=200, null=True, blank=True)
  # pickupRings = models.CharField(max_length=200, null=True, blank=True)
  # controlKnobs = models.CharField(max_length=200, null=True, blank=True)
  # pickupSelector = models.CharField(max_length=200, null=True, blank=True)
  # otherControls = models.CharField(max_length=200, null=True, blank=True)
  # flightCase = models.CharField(max_length=200, null=True, blank=True)
  # additionalInstructions = models.CharField(max_length=200, null=True, blank=True)

  # STORE DETAILS
  _id = models.AutoField(primary_key=True, editable=False)
  price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
  createdAt = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return str(self.createdAt)
