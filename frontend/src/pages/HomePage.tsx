// frontend/src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="card text-center mb-4">
        <h2>Добро пожаловать в "Наш Всеволожск"</h2>
        <p className="mb-2">
          Помогаем сделать город лучше вместе. Сообщайте о проблемах, 
          отслеживайте их решение и будьте в курсе событий города.
        </p>
        <button 
          className="btn"
          onClick={() => navigate('/report')}
        >
          Сообщить о проблеме
        </button>
      </section>

      {/* Features Grid */}
      <section className="grid grid-3">
        <div className="card">
          <h3>📝 Сообщить о проблеме</h3>
          <p>Заметили яму на дороге или неработающий фонарь? Сообщите нам!</p>
        </div>
        
        <div className="card">
          <h3>🗺️ Карта проблем</h3>
          <p>Смотрите все заявки на интерактивной карте города.</p>
          <button 
            className="btn btn-secondary mt-2"
            onClick={() => navigate('/map')}
          >
            Открыть карту
          </button>
        </div>
        
        <div className="card">
          <h3>📰 Новости города</h3>
          <p>Будьте в курсе последних событий и решений проблем.</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="card mt-4">
        <h3>Статистика платформы</h3>
        <div className="grid grid-3 mt-2">
          <div className="text-center">
            <h4>150+</h4>
            <p>решенных проблем</p>
          </div>
          <div className="text-center">
            <h4>500+</h4>
            <p>активных пользователей</p>
          </div>
          <div className="text-center">
            <h4>95%</h4>
            <p>удовлетворенных жителей</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;