# Generated by Django 4.2.6 on 2023-10-06 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_order_remove_guitar_brand_remove_guitar_category_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='guitar',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
