from django.urls import path
from .views import ChattingView, TextChattingView

urlpatterns = [
    path('chatting/', ChattingView.as_view(), name='chatting'),
    path('text-chatting/', TextChattingView.as_view(), name="text")
]
