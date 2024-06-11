from rest_framework import serializers
from .models import InputData



class InputSerializer(serializers.ModelSerializer):
    class Meta:
        model = InputData
        fields = ['file', 'question', 'created_at']