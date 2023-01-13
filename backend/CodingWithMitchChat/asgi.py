"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os
import django

from django.core.asgi import get_asgi_application

from django.urls import path

from channels.routing import ProtocolTypeRouter, URLRouter

from channels.auth import AuthMiddlewareStack

from chat.consumers import PersonalChatConsumer

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CodingWithMitchChat.settings')
django.setup()
application = get_asgi_application()


application = ProtocolTypeRouter({
    "http" : get_asgi_application(),
    'websocket' : AuthMiddlewareStack(
        URLRouter([
            path('ws/<int:myid>/<int:id>/', PersonalChatConsumer.as_asgi())
        ])
    )
})
