# Generated by Django 4.1.3 on 2022-12-02 05:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('freelancerside', '0004_rename_daysrequrired_bids_daysrequired'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Bids',
        ),
    ]
