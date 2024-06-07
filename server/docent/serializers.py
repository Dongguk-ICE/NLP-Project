from rest_framework import serializers
from drf_base64.fields import Base64ImageField
from .models import Chatting


class ChattingSerializer(serializers.ModelSerializer):
    picture = Base64ImageField(use_url=True, required=False)

    class Meta:
        model = Chatting
        fields = '__all__'
