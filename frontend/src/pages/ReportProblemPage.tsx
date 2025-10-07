// frontend/src/pages/ReportProblemPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportProblemPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    problemType: '',
    title: '',
    description: '',
    address: '',
  });

  const problemTypes = [
    { value: 'road', label: 'Яма на дороге' },
    { value: 'light', label: 'Сломанный фонарь' },
    { value: 'garbage', label: 'Невывезенный мусор' },
    { value: 'water', label: 'Протечка водопровода' },
    { value: 'tree', label: 'Опасное дерево' },
    { value: 'other', label: 'Другое' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные заявки:', formData);
    alert('Заявка отправлена! (пока в консоль)');
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(`Местоположение определено! Широта: ${position.coords.latitude}, Долгота: ${position.coords.longitude}`);
        },
        (error) => {
          console.error('Ошибка получения местоположения:', error);
          alert('Не удалось определить местоположение');
        }
      );
    } else {
      alert('Геолокация не поддерживается вашим браузером');
    }
  };

  return (
    <div className="card">
      <h2>Сообщить о проблеме</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="problemType">Тип проблемы *</label>
          <select
            id="problemType"
            name="problemType"
            value={formData.problemType}
            onChange={handleChange}
            required
          >
            <option value="">Выберите тип проблемы</option>
            {problemTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Краткое описание *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Например: 'Глубокая яма на тротуаре'"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Подробное описание</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Опишите проблему подробнее..."
            rows={4}
          />
        </div>

        <div className="form-group">
          <label>Местоположение *</label>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={handleLocationDetect}
            style={{ marginBottom: '10px' }}
          >
            📍 Определить мое местоположение
          </button>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Введите адрес или выберите на карте"
            required
          />
        </div>

        <div className="form-group">
          <label>Добавить фото</label>
          <input
            type="file"
            accept="image/*"
            style={{ marginTop: '5px' }}
          />
          <small>Фотография помогает быстрее решить проблему</small>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Отмена
          </button>
          <button type="submit" className="btn">
            Отправить заявку
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportProblemPage;