import React from 'react';
import { useNavigate } from 'react-router-dom'
import ParticleBackground from '../component/ParticleBackground';
import wizard from '../asset/WIZARD.gif';
import '../style/SwapScreen.css';

export default function Swap() {

  const navigate = useNavigate();

  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <p>Swap time!</p>
      </header>
    </div>
    
  );
}
