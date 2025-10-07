# backend/problems/serializers.py
from rest_framework import serializers
from .models import ProblemReport, ProblemMedia

class ProblemMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProblemMedia
        fields = ['id', 'file', 'file_type', 'created_at']

class ProblemReportSerializer(serializers.ModelSerializer):
    media = ProblemMediaSerializer(many=True, read_only=True)
    problem_type_display = serializers.CharField(source='get_problem_type_display', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    
    class Meta:
        model = ProblemReport
        fields = [
            'id', 'problem_type', 'problem_type_display', 'title', 'description',
            'location', 'address', 'status', 'status_display', 'priority',
            'created_at', 'updated_at', 'media'
        ]

class ProblemReportCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProblemReport
        fields = ['problem_type', 'title', 'description', 'location', 'address']
    
    def create(self, validated_data):
        # Автоматически назначаем текущего пользователя
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)