# Generated by Django 4.1.4 on 2022-12-26 10:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('freelancerside', '0018_alter_servicerating_reviewuser_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='freelancerservice',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
    ]
