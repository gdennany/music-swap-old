import React from 'react';
//import PlatformButton from '../component/PlatformButton';
import SpotifyLogo from '../asset/SPOTIFYLOGO.png';
import AppleMusicLogo from '../asset/APPLEMUSICLOGO.png';
import AmazonMusicLogo from '../asset/AMAZONMUSICLOGO.png';
import TidalLogo from '../asset/TIDALLOGO.png';
import '../style/SwapScreen.css';

export default function Swap() {

  /*
  <PlatformButton platform="Spotify" />
        <PlatformButton platform="Apple Music" />
        <PlatformButton platform="Amazon Music" />
        <PlatformButton platform="Tidal" />
        */
  return (
    <div className="Split-screen" >
      
      <div className="Swap-from">
        <button className="Platform-button" >
          <img id="spotify" src={SpotifyLogo} className="Platform-image" alt="spotify" />
            Spotify
        </button>
        <button className="Platform-button" >
          <img id="apple" src={AppleMusicLogo} className="Platform-image" alt="apple" />
            Spotify
        </button>
        <button className="Platform-button" >
          <img id="amazon" src={AmazonMusicLogo} className="Platform-image" alt="amazon" />
            Spotify
        </button>
        <button className="Platform-button" >
          <img id="tidal" src={TidalLogo} className="Platform-image" alt="tidal" />
            Spotify
        </button>
      </div>

      <div className="Swap-to">
        <button className="Platform-button" >
          <img id="spotify" src={SpotifyLogo} className="Platform-image" alt="spotify" />
            Spotify
        </button>
        <button className="Platform-button" >
          <img id="apple" src={AppleMusicLogo} className="Platform-image" alt="apple" />
            Spotify
        </button>
        <button className="Platform-button" >
          <img id="amazon" src={AmazonMusicLogo} className="Platform-image" alt="amazon" />
            Spotify
        </button>
        <button className="Platform-button" >
          <img id="tidal" src={TidalLogo} className="Platform-image" alt="tidal" />
            Spotify
        </button>
      </div>

    </div>    
);
}
