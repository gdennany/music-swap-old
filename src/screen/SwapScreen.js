import React from 'react';
import ParticleBackground from '../component/ParticleBackground';
import PlatformButton from '../component/PlatformButton';
import '../style/SwapScreen.css';

export default function SwapScreen() {
  function descriptionClick() {
    alert('hi');
  }

  return (
    <div className="Swap">
      <ParticleBackground />
      <header className="Swap-header">
          <div className="Swap-from">
              <p>Swap From</p>
              <PlatformButton platform="Spotify"  />
              <PlatformButton platform="Apple" />
              <PlatformButton platform="Amazon" />
              <PlatformButton platform="Tidal" />
          </div>
          <div className="Swap-to">
              <p>Swap to</p>
              <PlatformButton platform="Spotify" />
              <PlatformButton platform="Apple" />
              <PlatformButton platform="Amazon" />
              <PlatformButton platform="Tidal" />
          </div>
      </header>
    </div>
    
  );
}