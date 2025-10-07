# backend/problems/views.py
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import ProblemReport
from .serializers import ProblemReportSerializer, ProblemReportCreateSerializer

class ProblemReportViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return ProblemReport.objects.filter(user=self.request.user)
        return ProblemReport.objects.filter(status='new')
    
    def get_serializer_class(self):
        if self.action == 'create':
            return ProblemReportCreateSerializer
        return ProblemReportSerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def nearby(self, request):
        lat = request.query_params.get('lat')
        lon = request.query_params.get('lon')
        
        if not lat or not lon:
            return Response(
                {'error': 'Требуются параметры lat и lon'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            # Простая фильтрация по координатам
            problems = ProblemReport.objects.filter(
                latitude__isnull=False,
                longitude__isnull=False
            )[:10]  # Просто возвращаем первые 10 заявок
            
            serializer = self.get_serializer(problems, many=True)
            return Response(serializer.data)
        except ValueError:
            return Response(
                {'error': 'Неверные координаты'}, 
                status=status.HTTP_400_BAD_REQUEST
            )