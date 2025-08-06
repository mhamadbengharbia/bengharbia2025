import React  from 'react';
import './style.css';
import Header from "./Header";
import link from "../src/linkedin.webp";
import Gith from "../src/github.webp";
import Mail from "../src/mail.webp";
import tel from "../src/tel.webp";
 
import pic from "../src/logo2.webp";
 function Hero() {
 
 

  return (
    <div className='hero '>
      <Header />
      <div className='herosection'>
        <div className='herol'>
          <div className='socialMedia'>
         <a href='https://www.linkedin.com/in/mhamed-ben-gharbia/'  target="_blank" 
  rel="noopener noreferrer">  <img src={link} alt="LinkedIn" /></a> 
         <a href='https://github.com/mhamadbengharbia'  target="_blank" 
  rel="noopener noreferrer"> <img src={Gith} alt="GitHub" /></a> 
         <a href='mailto:mhamedbengharbia@gmail.com' target="_blank" 
  rel="noopener noreferrer" > <img src={Mail} alt="Mail" /></a> 
         <a href='tel:+21621420848' target="_blank" 
  rel="noopener noreferrer" > <img src={tel} alt="Telephone" /></a> 
          </div>
        </div>
        <div className='herocontainer'>
        <main class="heror">
          <div className='heror1'>
  <p>Hello 👋 I'm </p>
  <section class="animation">
    <div class="first"><div>MHAMED BEN GHARBIA</div></div>
    <div class="second"><div> A NETWORK TECHNICIEN</div></div>
    <div class="third"><div>A WEB DEVELOPER</div></div>
  </section>

  </div>
  <button  className="dnbtn"><a target="_blank" 
  rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1kjWC-4Nk3Schox_zFq4Hle010co-FqS2?usp=sharing" > Download CV </a> </button>
  
  </main>


        <div className="image-container">
         <img src={pic} />
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Hero;
