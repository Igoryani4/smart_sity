// frontend/src/pages/ProblemsMapPage.tsx
import React, { useState, useEffect } from 'react';

// Временные данные для демонстрации
const mockProblems = [
  {
    id: 1,
    type: 'road',
    title: 'Яма на Ленинградской улице',
    address: 'ул. Ленинградская, 25',
    status: 'new',
    date: '2024-01-15'
  },
  {
    id: 2,
    type: 'light',
    title: 'Не работает фонарь',
    address: 'Центральный парк',
    status: 'in_progress',
    date: '2024-01-14'
  },
  {
    id: 3,
    type: 'garbage',
    title: 'Невывезенный мусор',
    address: 'ул. Московская, 10',
    status: 'resolved',
    date: '2024-01-13'
  }
];

const ProblemsMapPage: React.FC = () => {
  const [problems, setProblems] = useState(mockProblems);
  const [selectedType, setSelectedType] = useState('all');

  const problemTypes = [
    { value: 'all', label: 'Все проблемы' },
    { value: 'road', label: 'Ямы на дорогах' },
    { value: 'light', label: 'Сломанные фонари' },
    { value: 'garbage', label: 'Мусор' },
    { value: 'water', label: 'Водопровод' },
    { value: 'tree', label: 'Деревья' }
  ];

  const filteredProblems = selectedType === 'all' 
    ? problems 
    : problems.filter(problem => problem.type === selectedType);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return '#ff6b6b';
      case 'in_progress': return '#ffa726';
      case 'resolved': return '#66bb6a';
      default: return '#9e9e9e';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'Новая';
      case 'in_progress': return 'В работе';
      case 'resolved': return 'Решена';
      default: return 'Неизвестно';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'road': return '🕳️';
      case 'light': return '💡';
      case 'garbage': return '🗑️';
      case 'water': return '💧';
      case 'tree': return '🌳';
      default: return '❓';
    }
  };

  return (
    <div>
      <div className="card">
        <h2>Карта проблем Всеволожска</h2>
        
        {/* Фильтры */}
        <div className="form-group">
          <label>Фильтр по типу проблемы:</label>
          <select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {problemTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Заглушка карты */}
        <div style={{ 
          background: 'linear-gradient(145deg, #e0e0e0, #f5f5f5)',
          height: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: '8px',
          marginBottom: '2rem',
          border: '2px dashed #ccc',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ fontSize: '3rem' }}>🗺️</div>
          <p style={{ textAlign: 'center', color: '#666' }}>
            Здесь будет интерактивная карта с проблемами<br />
            (Яндекс.Карты / Google Maps)
          </p>
          <button className="btn btn-secondary">
            📍 Показать мое местоположение
          </button>
        </div>

        {/* Легенда карты */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          justifyContent: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#ff6b6b', borderRadius: '50%' }}></div>
            <span>Новые</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#ffa726', borderRadius: '50%' }}></div>
            <span>В работе</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#66bb6a', borderRadius: '50%' }}></div>
            <span>Решены</span>
          </div>
        </div>
      </div>

      {/* Список проблем */}
      <div className="card">
        <h3>Список проблем ({filteredProblems.length})</h3>
        
        {filteredProblems.map(problem => (
          <div 
            key={problem.id}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '1rem',
              margin: '1rem 0',
              backgroundColor: '#fafafa'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{getTypeIcon(problem.type)}</span>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>{problem.title}</h4>
                  <p style={{ margin: 0, color: '#666' }}>📍 {problem.address}</p>
                  <small style={{ color: '#999' }}>Создано: {problem.date}</small>
                </div>
              </div>
              <div style={{ 
                padding: '0.25rem 0.75rem', 
                borderRadius: '20px', 
                backgroundColor: getStatusColor(problem.status),
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {getStatusText(problem.status)}
              </div>
            </div>
          </div>
        ))}

        {filteredProblems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            <p>Проблем выбранного типа не найдено</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemsMapPage;