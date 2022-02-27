import React, { useState, useEffect } from 'react';
import ParticleBackground from '../component/ParticleBackground';
import { Spotify } from '../api/Spotify';

import spotifyLogo from '../asset/SPOTIFYLOGO.png';
import appleMusicLogo from '../asset/APPLEMUSICLOGO.png';
import amazonMusicLogo from '../asset/AMAZONMUSICLOGO.png';
import tidalLogo from '../asset/TIDALLOGO.png';
import '../style/SwapScreen.css';

/*
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
      //<button className="Platform-button" onClick={buttonClick}>
      <img className="Platform-image" alt=""/>
          {streamingServiceName}
      </button> //
      <button className="Platform-button" >
          {streamingServiceName}
      </button> 
    </div>
  );
}
*/

let DEV_WELCOME_URL = "http://localhost:3000"

function SwapScreen() {
  let NS = "NOT_SELECTED";
  let platforms = ["Spotify", "Apple", "Amazon", "Tidal"];
  let [fromPlatformText, setFromPlatformText] = useState(NS);
  let [toPlatformText, setToPlatformText] = useState(NS);
  let [summonSwapVisibilty, setSummonSwapVisibilty] = useState("hidden");

  function fromPlatform(platform) {
    setFromPlatformText(platform);
    for (const p of platforms) {
      if (p === platform) {
        document.getElementById("From" + p).className = "Platform-button-selected";
        document.getElementById("To" + p).className = "Platform-button";
      } else {
        document.getElementById("From" + p).className = "Platform-button"
      }
    }
  };

  function toPlatform(platform) {
    setToPlatformText(platform);
    for (const p of platforms) {
      if (p === platform) {
        document.getElementById("To" + p).className = "Platform-button-selected";
        document.getElementById("From" + p).className = "Platform-button";
      } else {
        document.getElementById("To" + p).className = "Platform-button"
      }
    }
  };

  useEffect(() => {
    if (fromPlatformText !== NS || toPlatformText !== NS) {
      if (fromPlatformText === toPlatformText) {
        if (document.getElementById("To" + toPlatformText).className === "Platform-button-selected") {
          setFromPlatformText(NS);
        } else {
          setToPlatformText(NS);
        }
      }
    };
    if (fromPlatformText !== NS && toPlatformText !== NS) {
      setSummonSwapVisibilty("visible");
    } else {
      setSummonSwapVisibilty("hidden");
    }
  });

  return (
    <div className="Swap">
      {/*<ParticleBackground />*/}
      <header className="Swap-header">
        <div className="columns" >
          <div className="Swap-from">
            <p>Swap From</p>
            {/*<PlatformButton id="FromSpotify" platform="Spotify" toFrom="from" />*/}
            <button id="FromSpotify" className="Platform-button" onClick={() => fromPlatform("Spotify")}>
              <input type="image" src={spotifyLogo} className='Button-image' alt="Spotify"/> 
              <p className='Button-text'>Spotify</p>
            </button>
            <button id="FromApple" className="Platform-button" onClick={() => fromPlatform("Apple")}>
              <input type="image" src={appleMusicLogo} className='Button-image' alt="Apple Music"/> 
              <p className='Button-text'>Apple Music</p>
            </button>
            <button id="FromAmazon" className="Platform-button" onClick={() => fromPlatform("Amazon")}>
              <input type="image" src={amazonMusicLogo} className='Button-image' alt="Amazon Music"/> 
              <p className='Button-text'>Amazon Music</p>
            </button>
            <button id="FromTidal" className="Platform-button" onClick={() => fromPlatform("Tidal")}>
              <input type="image" src={tidalLogo} className='Button-image' alt="Tidal"/> 
              <p className='Button-text'>Tidal</p>
            </button>
          </div>
          <div className="Swap-to">
            <p>Swap to</p>
            <button id="ToSpotify" className="Platform-button" onClick={() => toPlatform("Spotify")}>
              <input type="image" src={spotifyLogo} className='Button-image' alt="Spotify"/> 
              <p className='Button-text'>Spotify</p>
            </button>
            <button id="ToApple" className="Platform-button" onClick={() => toPlatform("Apple")} >
              <input type="image" src={appleMusicLogo} className='Button-image' alt="Apple Music"/> 
              <p className='Button-text'>Apple Music</p>
            </button>
            <button id="ToAmazon" className="Platform-button" onClick={() => toPlatform("Amazon")} >
              <input type="image" src={amazonMusicLogo} className='Button-image' alt="Amazon Music"/> 
              <p className='Button-text'>Amazon Music</p>
            </button>
            <button id="ToTidal" className="Platform-button" onClick={() => toPlatform("Tidal")} >
              <input type="image" src={tidalLogo} className='Button-image' alt="Tidal"/> 
              <p className='Button-text'>Tidal</p>
            </button>
          </div>
        </div>
        <div>
          <p style={{padding:"15px", textAlign:"cent"}}>You will be swapping music from your {fromPlatformText} library to your {toPlatformText} library.</p>
          <button className="Summon-button" style={{visibility: summonSwapVisibilty}} onClick={() => window.location = `${DEV_WELCOME_URL}/initiate-swaps?from=${fromPlatform}&to=${toPlatform}` }>Initiate Swapping Sequence</button>
        </div>
      </header>
      
    </div>
  );
}

export default SwapScreen;