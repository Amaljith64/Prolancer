# Generated by Django 4.1.4 on 2022-12-26 09:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('freelancerside', '0017_alter_servicerating_reviewuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicerating',
            name='reviewuser',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='servicerating',
            name='service',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviewed_user_details', to='freelancerside.freelancerservice'),
        ),
    ]
