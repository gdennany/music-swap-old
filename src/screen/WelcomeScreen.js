import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ParticleBackground from '../component/ParticleBackground';
import wizard from '../asset/WIZARD.gif';
import logo from'../asset/LOGO.png';
import '../style/WelcomeScreen.css';

export default function WelcomeScreen() {

  const navigate = useNavigate();
  let [descriptionCount, setDescriptionCount] = useState(0);
  let [howToCount, setHowToCount] = useState(0);

  const noDescription = "What is this? &#8595;";
  const withDescription = "What is this? &#8595;<br /> <br />And heres The Description";

  const noHowTo = "How do i use it? &#8595;";
  const withHowTo = "How do i use it? &#8595;<br /><br />And heres the how to"

  function descriptionClick() {
    descriptionCount = descriptionCount + 1;
    setDescriptionCount(descriptionCount);
    if (descriptionCount % 2 == 1) {
      document.getElementById("p1").innerHTML = withDescription;
    } else {
      document.getElementById("p1").innerHTML = noDescription;
    }
  }

  function howToClick() {
    howToCount = howToCount + 1;
    setHowToCount(howToCount);
    if (howToCount % 2 == 1) {
      document.getElementById("p2").innerHTML = withHowTo;
    } else {
      document.getElementById("p2").innerHTML = noHowTo;
    }
  }

  return (
    <div className="Welcome">
      <ParticleBackground />
      <header className="Welcome-header">
        <img src={logo} className="Welcome-logo" />
        <img src={wizard} className="Welcome-wizard" />
        <button className="Enter-button" onClick={() => navigate('/test')}>Enter Site</button>
        <p id="p1" onClick={descriptionClick}>What is this? &#8595;</p>
        <p id="p2" onClick={howToClick}>How do i use it? &#8595;</p>
      </header>
    </div>
    
  );
}
