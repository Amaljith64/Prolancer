# Generated by Django 4.1.4 on 2022-12-25 14:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('clientside', '0013_clientjobs_expired'),
    ]

    operations = [
        migrations.CreateModel(
            name='PayJob',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('payment_method', models.CharField(max_length=225)),
                ('jobid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clientside.clientjobs')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
