# Generated by Django 3.2.8 on 2022-12-09 05:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('freelancerside', '0008_rename_user_servicerating_reviewuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicerating',
            name='reviewtime',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
