import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

import theoristImage from '../assets/Images/theorist.png';
import theoreticalPracticalImage from '../assets/Images/theoretical-practical.png';
import practicalImage from '../assets/Images/practical.png';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Choose the mode that best suits your needs</h1>
      <div className="triangle-layout">
        <div className="mode-option" onClick={() => handleNavigate('/theory')}>
          <img src={theoristImage} alt="Theorist Mode" className="mode-image" />
          <p className="mode-label">Theorist</p>
        </div>
        <div className="mode-option" onClick={() => handleNavigate('/theory-practice')}>
          <img src={theoreticalPracticalImage} alt="Theoretical-Practical Mode" className="mode-image" />
          <p className="mode-label">Theoretical-practical</p>
        </div>
        <div className="mode-option" onClick={() => handleNavigate('/practice')}>
          <img src={practicalImage} alt="Practical Mode" className="mode-image" />
          <p className="mode-label">Practical</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
