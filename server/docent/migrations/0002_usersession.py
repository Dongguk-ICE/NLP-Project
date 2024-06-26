# Generated by Django 5.0.6 on 2024-06-07 08:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("docent", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="UserSession",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("session_key", models.CharField(max_length=100, unique=True)),
                ("image_data", models.TextField(blank=True, null=True)),
                ("last_interaction", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
