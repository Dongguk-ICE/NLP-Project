from django.urls import path
from .views import InputDataView, TextDataView

urlpatterns = [
    path('chatting/', InputDataView.as_view(), name='chatting'),
    path('text-chatting/', TextDataView.as_view(), name='chatting'),
]
