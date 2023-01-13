"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os
from django.conf.urls import url
from django.urls import path
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CodingWithMitchChat.settings')

from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
application = get_asgi_application()

from channels.auth import AuthMiddlewareStack

from chat.consumers import PersonalChatConsumer


    

application = ProtocolTypeRouter({
    "http" : get_asgi_application(),
    'websocket' : AuthMiddlewareStack(
        URLRouter([
            path('ws/<int:myid>/<int:id>/', PersonalChatConsumer.as_asgi())
        ])
    )
})
