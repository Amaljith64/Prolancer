# Generated by Django 4.1.4 on 2023-01-15 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0015_newuser_is_email_verified'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='email_token',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='newuser',
            name='otp',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
