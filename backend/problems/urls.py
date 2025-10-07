# backend/problems/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProblemReportViewSet

router = DefaultRouter()
router.register(r'', ProblemReportViewSet, basename='problemreport')

urlpatterns = [
    path('', include(router.urls)),
]