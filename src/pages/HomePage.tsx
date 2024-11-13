// src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <h1>Bienvenido a PySkill</h1>
      <div className="triangle-layout">
        <button className="home-button" onClick={() => handleNavigate('/theory')}>
          Teórico
        </button>
        <button className="home-button" onClick={() => handleNavigate('/theory-practice')}>
          Teórico-Práctico
        </button>
        <button className="home-button" onClick={() => handleNavigate('/practice')}>
          Práctico
        </button>
      </div>
    </div>
  );
};

export default HomePage;
