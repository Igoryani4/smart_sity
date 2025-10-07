// frontend/src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGosuslugiLogin = () => {
    setIsLoading(true);
    
    // Имитация авторизации через Госуслуги
    setTimeout(() => {
      setIsLoading(false);
      alert('Вход через Госуслуги успешен! (пока заглушка)');
      navigate('/');
    }, 2000);
  };

  const handleDemoLogin = () => {
    // Быстрый вход для демо
    alert('Демо-вход выполнен! Теперь вы можете создавать заявки.');
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Вход в систему</h2>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔐</div>
          <p>Для работы с платформой требуется авторизация через портал Госуслуги</p>
        </div>

        {/* Кнопка Госуслуги */}
        <button 
          className="btn"
          onClick={handleGosuslugiLogin}
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            marginBottom: '1rem',
            backgroundColor: '#2d7c58',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          {isLoading ? (
            '⏳ Подключение к Госуслугам...'
          ) : (
            <>
              <span style={{ fontSize: '1.2rem' }}>🏛️</span>
              Войти через Госуслуги
            </>
          )}
        </button>

        {/* Демо-кнопка для разработки */}
        <button 
          className="btn btn-secondary"
          onClick={handleDemoLogin}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '14px'
          }}
        >
          🚀 Демо-вход (для тестирования)
        </button>

        {/* Информация о Госуслугах */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#e8f5e9', 
          borderRadius: '8px',
          border: '1px solid #c8e6c9'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#2e7d32' }}>Почему Госуслуги?</h4>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#555' }}>
            <li>Безопасная идентификация</li>
            <li>Не нужно создавать новый аккаунт</li>
            <li>Официальный статус обращений</li>
            <li>Защита от спама и анонимных жалоб</li>
          </ul>
        </div>

        {/* Ссылка на помощь */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <small style={{ color: '#666' }}>
            Нет аккаунта на Госуслугах?{' '}
            <a 
              href="https://www.gosuslugi.ru/help/registration" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#1976d2' }}
            >
              Зарегистрируйтесь
            </a>
          </small>
        </div>
      </div>

      {/* Преимущества платформы */}
      <div className="card" style={{ marginTop: '2rem' }}>
        <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>Преимущества платформы</h4>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>⚡</span>
            <span>Быстрая обработка заявок</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🗺️</span>
            <span>Прозрачность на карте города</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>📱</span>
            <span>Удобный мобильный интерфейс</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🔔</span>
            <span>Уведомления о статусе заявок</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;