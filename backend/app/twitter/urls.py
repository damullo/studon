from django.http import JsonResponse
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

def index(request):
    return JsonResponse({"message": "Mini Twitter API is running 🚀"})

urlpatterns = [
    path("", index),
    path("api/", include("posts.urls")),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
