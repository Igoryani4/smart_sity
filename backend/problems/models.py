# backend/problems/models.py
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class ProblemReport(models.Model):
    class ProblemType(models.TextChoices):
        ROAD = 'road', 'Яма на дороге'
        LIGHT = 'light', 'Сломанный фонарь'
        GARBAGE = 'garbage', 'Невывезенный мусор'
        WATER = 'water', 'Протечка водопровода'
        TREE = 'tree', 'Опасное дерево'
        OTHER = 'other', 'Другое'

    class Status(models.TextChoices):
        NEW = 'new', 'Новая'
        IN_PROGRESS = 'in_progress', 'В работе'
        RESOLVED = 'resolved', 'Решена'
        REJECTED = 'rejected', 'Отклонена'

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='problems')
    problem_type = models.CharField(max_length=20, choices=ProblemType.choices)
    title = models.CharField(max_length=200)
    description = models.TextField()
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    address = models.CharField(max_length=500)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.NEW)
    priority = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=['status', 'created_at']),
            models.Index(fields=['problem_type', 'status']),
        ]
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.get_problem_type_display()} - {self.title}"

class ProblemMedia(models.Model):
    problem = models.ForeignKey(ProblemReport, on_delete=models.CASCADE, related_name='media')
    file = models.FileField(upload_to='problem_media/')
    file_type = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Media for {self.problem.title}"