# Generated by Django 4.1.3 on 2022-12-02 13:30

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('freelancerside', '0005_delete_bids'),
    ]

    operations = [
        migrations.AddField(
            model_name='freelancerservice',
            name='servicetime',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
