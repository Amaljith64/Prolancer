# Generated by Django 4.1.3 on 2022-11-28 13:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('clientside', '0002_alter_category_category_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClientJobs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_title', models.CharField(max_length=225)),
                ('min_budget', models.IntegerField()),
                ('max_budget', models.IntegerField()),
                ('skill_required', models.CharField(max_length=225)),
                ('job_description', models.TextField()),
                ('img', models.ImageField(null=True, upload_to='image')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clientside.category')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
