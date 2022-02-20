import React, { useState } from 'react';
import ParticleBackground from '../component/ParticleBackground';
import wizard from '../asset/WIZARD.gif';
import logoStatic from'../asset/LOGO.png';
import logoAnimated from'../asset/LOGO.gif';
import '../style/WelcomeScreen.css';

let DEV_WELCOME_URL = "http://localhost:3000"

export default function WelcomeScreen() {

  let [logoCount, setLogoCount] = useState(0);
  let [descriptionCount, setDescriptionCount] = useState(0);
  let [howToCount, setHowToCount] = useState(0);
  let [wizardCount, setWizardCount] = useState(0);

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
      window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
    } else {
      document.getElementById("p2").innerHTML = noHowTo;
      window.scroll({
        top: document.body.offsetTop,
        left: 0, 
        behavior: 'smooth',
      });
    }
  }

  function logoClick() {
    logoCount = logoCount + 1;
    setLogoCount(logoCount);
    if (logoCount % 2 === 1) {
      document.getElementById("logo").src = logoAnimated;
    } else {
      document.getElementById("logo").src = logoStatic;
    }
  }

  function wizardClick() {
    wizardCount = wizardCount + 1;
    setWizardCount(wizardCount);
    if (wizardCount % 2 === 1) {
      document.getElementById("wizard").className = "Spin-wizard";
    } else {
      document.getElementById("wizard").className = "Welcome-wizard";
    }
  }

  return (
    <div className="Welcome">
      {/*<ParticleBackground />*/}
      <header className="Welcome-header">
        <p className="p" onClick={logoClick}><img id="logo" src={logoStatic} className="Welcome-logo" alt="logo" /></p>
        <p onClick={wizardClick}><img id="wizard" src={wizard} className="Welcome-wizard" alt="wizard" /></p>
        <button className="Enter-button" onClick={() => window.location = DEV_WELCOME_URL + "/test"} >Enter App</button>
        <p id="p1" onClick={descriptionClick}>What is this? &#8595;</p>
        <p id="p2" onClick={howToClick}>How do i use it? &#8595;</p>
      </header>
    </div>
    
  );
}
