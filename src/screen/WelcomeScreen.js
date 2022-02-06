import React from 'react';
import { useNavigate } from 'react-router-dom'
import ParticleBackground from '../component/ParticleBackground';
import wizard from '../asset/WIZARD.gif';
import '../style/WelcomeScreen.css';

export default function WelcomeScreen() {

  const navigate = useNavigate();

  return (
    <div className="Welcome">
      <ParticleBackground />
      <header className="Welcome-header">
        <img src={wizard} className="Welcome-logo" alt="logo" />
        <button className="Enter-button" onClick={() => navigate('/test')}>Enter App</button>
        <p>What is this?</p>
        <p>How do i use it?</p>
      </header>
    </div>
    
  );
}
