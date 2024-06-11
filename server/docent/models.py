from django.db import models
class InputData(models.Model):
    file= models.ImageField(upload_to='uploads/', blank=True, null=True)
    question = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)  # 자동으로 생성 시각 저장
