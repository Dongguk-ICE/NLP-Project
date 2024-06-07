from django.db import models

class Chatting(models.Model):
    image = models.ImageField(upload_to="images/")
    def __str__(self):
        return self.name

class UserSession(models.Model):
    session_key = models.CharField(max_length=100, unique=True)
    image_data = models.TextField(blank=True, null=True)  # Base64 인코딩된 이미지 데이터
    last_interaction = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.session_key
