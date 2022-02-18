import React from 'react';
import ParticleBackground from '../component/ParticleBackground';
import { Spotify } from '../api/Spotify';

import spotifyLogo from '../asset/SPOTIFYLOGO.png';
import appleMusicLogo from '../asset/APPLEMUSICLOGO.png';
import amazonMusicLogo from '../asset/AMAZONMUSICLOGO.png';
import tidalLogo from '../asset/TIDALLOGO.png';
import '../style/SwapScreen.css';

function PlatformButton({ platform, toFrom }) {
  //alert(platform)
  let streamingServiceName = "";
  let streamingServiceLogo = "";
  switch (platform) {
    case "Spotify":
      streamingServiceName = "Spotify";
      streamingServiceLogo = spotifyLogo;
      break;
    case "Apple":
      streamingServiceName = "Apple Music";
      streamingServiceLogo = appleMusicLogo;
      break;
    case "Amazon":
      streamingServiceName = "Amazon Music";
      streamingServiceLogo = amazonMusicLogo;
      break;
    case "Tidal":
      streamingServiceName = "Tidal";
      streamingServiceLogo = tidalLogo;
      break;
    default:
      break;
  };


  return (
    <div>
      {/*<button className="Platform-button" onClick={buttonClick}>
      <img className="Platform-image" alt=""/>
          {streamingServiceName}
      </button> */}
      <button className="Platform-button" >
          {streamingServiceName}
      </button> 
    </div>
  );
}

function SwapScreen() {
  let platforms = ["Spotify", "Apple", "Amazon", "Tidal"];

  function fromPlatform(platform) {
    for (const p of platforms) {
      if (p == platform) {
        document.getElementById("From" + p).className = "Platform-button-selected";
        document.getElementById("To" + p).className = "Platform-button";
      } else {
        document.getElementById("From" + p).className = "Platform-button"
      }
    }
  };

  function toPlatform(platform) {
    for (const p of platforms) {
      if (p == platform) {
        document.getElementById("To" + p).className = "Platform-button-selected";
        document.getElementById("From" + p).className = "Platform-button";
      } else {
        document.getElementById("To" + p).className = "Platform-button"
      }
    }
  };

  return (
    <div className="Swap">
      {/*<ParticleBackground />*/}
      <header className="Swap-header">
          <div className="Swap-from">
              <p>Swap From</p>
              {/*<PlatformButton id="FromSpotify" platform="Spotify" toFrom="from" />*/}
              <button id="FromSpotify" className="Platform-button" onClick={() => fromPlatform("Spotify")}>Spotify</button>
              <button id="FromApple" className="Platform-button" onClick={() => fromPlatform("Apple")}>Apple Music</button>
              <button id="FromAmazon" className="Platform-button" onClick={() => fromPlatform("Amazon")}>Amazon Music</button>
              <button id="FromTidal" className="Platform-button" onClick={() => fromPlatform("Tidal")}>Tidal</button>
          </div>
          <div className="Swap-to">
              <p>Swap to</p>
              <button id="ToSpotify" className="Platform-button" onClick={() => toPlatform("Spotify")}>Spotify</button>
              <button id="ToApple" className="Platform-button" onClick={() => toPlatform("Apple")} >Apple Music</button>
              <button id="ToAmazon" className="Platform-button" onClick={() => toPlatform("Amazon")} >Amazon Music</button>
              <button id="ToTidal" className="Platform-button" onClick={() => toPlatform("Tidal")} >Tidal</button>
          </div>
      </header>
    </div>
  );
}

export default SwapScreen;