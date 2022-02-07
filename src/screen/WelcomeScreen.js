import React, { useState } from 'react';
import ParticleBackground from '../component/ParticleBackground';
import wizard from '../asset/WIZARD.gif';
import logo from'../asset/LOGO.png';
import '../style/WelcomeScreen.css';

export default function WelcomeScreen() {

  let [descriptionCount, setDescriptionCount] = useState(0);
  let [howToCount, setHowToCount] = useState(0);

  const noDescription = "What is this? &#8595;";
  const withDescription = "What is this? &#8595;<br /> <br />And heres The Description";

  const noHowTo = "How do i use it? &#8595;";
  const withHowTo = "How do i use it? &#8595;<br /><br />And heres the how to"

  function descriptionClick() {
    descriptionCount = descriptionCount + 1;
    setDescriptionCount(descriptionCount);
    if (descriptionCount % 2 === 1) {
      document.getElementById("p1").innerHTML = withDescription;
    } else {
      document.getElementById("p1").innerHTML = noDescription;
    }
  }

  function howToClick() {
    howToCount = howToCount + 1;
    setHowToCount(howToCount);
    if (howToCount % 2 === 1) {
      document.getElementById("p2").innerHTML = withHowTo;
    } else {
      document.getElementById("p2").innerHTML = noHowTo;
    }
  }

  return (
    <div className="Welcome">
      <ParticleBackground />
      <header className="Welcome-header">
        <img src={logo} className="Welcome-logo" alt="logo" />
        <img src={wizard} className="Welcome-wizard" alt="wizard" />
        <a href="/test" ><button className="Enter-button" >Enter Site</button></a>
        <p id="p1" onClick={descriptionClick}>What is this? &#8595;</p>
        <p id="p2" onClick={howToClick}>How do i use it? &#8595;</p>
      </header>
    </div>
    
  );
}
