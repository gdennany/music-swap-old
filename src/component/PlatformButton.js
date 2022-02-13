import React from 'react';
import spotifyLogo from '../asset/SPOTIFYLOGO.png';
import appleMusicLogo from '../asset/APPLEMUSICLOGO.png';
import amazonMusicLogo from '../asset/AMAZONMUSICLOGO.png';
import tidalLogo from '../asset/TIDALLOGO.png';
import '../style/PlatformButton.css';

const PlatformButton = ({ platform }) => {
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

  function buttonClick() {
    //alert(streamingServiceName)
  }

  return (
      <button className="Platform-button" onClick={buttonClick}>
        <img className="Platform-image" src={streamingServiceLogo}/>
          {streamingServiceName}
      </button>
  );
}

export default PlatformButton;