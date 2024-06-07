from django.urls import path
from .views import ChattingView

urlpatterns = [
    path('chatting/', ChattingView.as_view(), name='chatting'),
]
