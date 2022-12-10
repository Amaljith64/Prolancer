# Generated by Django 4.1.3 on 2022-11-30 08:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clientside', '0003_clientjobs'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FreelancerService',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_title', models.CharField(max_length=225)),
                ('Price', models.IntegerField()),
                ('response_time', models.IntegerField()),
                ('skills', models.CharField(max_length=225)),
                ('language', models.CharField(max_length=225)),
                ('service_description', models.TextField()),
                ('img', models.ImageField(null=True, upload_to='image')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clientside.category')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]