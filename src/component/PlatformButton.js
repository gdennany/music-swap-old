import React from 'react';
import tidalLogo from '../asset/TIDALLOGO.png'
import '../style/SwapScreen.css';

const PlatformButton = ({ platform }) => {
    //let path = '';
    let text = '../asset/TIDALLOGO.png';
    switch(platform) {
        case "Spotify":
            text = tidalLogo.src;
            break;
        default:
            alert('hi')
            break;
    }

  return (
      <button className="Platform-button" >
        <img id="btn" src={tidalLogo} className="Platform-image" alt="tidal" />
          {text}
      </button>    
  );
}

export default PlatformButton;