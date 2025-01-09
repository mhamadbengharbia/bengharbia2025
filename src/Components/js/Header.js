import React, { useState } from 'react';
import './style.css';
import fr from "../src/fr.webp";
import uk from "../src/uk.webp";
 
function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="Header">
      
      <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
         <li><a href="#about">About Me /></a></li>
        <li><a href="#diplomas">Diplomas and Certifications /></a></li>
        <li><a href="#projects">Projects /></a></li>
        <li><a href="#skills">Skills /></a></li>
        <li><a href="#contact">Contact Me /></a></li>
        <div id="lang">
        <li><a href="/"><img src={uk} /></a></li>

        <li><a href="/fr"><img src={fr} /></a></li>
        </div>
     
      </ul>

      {/* Burger icon */}
      <div className="burger" onClick={toggleMenu}>
        <div className={`burger-icon ${isMenuActive ? 'active' : ''}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Close icon (X) */}
      <div className={`x ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="x-line"></div>
        <div className="x-line"></div>
      </div>
    </div>
  );
}

export default Header;
