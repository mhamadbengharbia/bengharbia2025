import React  from 'react';
import './style.css';
import mypic from "../src/Mypic.webp";
function About() {
  return (
    <div className="about "  id="about">
    <div className='abouttop'>
        <div className='aboutleft'>
            <img src={mypic} alt='my picture' />
            </div>    
            <div className='aboutrigth'>
                <h1>About Me /></h1>
                <p className=''>Passionate about networks 📡 and web development 🌐, I am a Junior IT Specialist and a Full-Stack Web Developer certified from Coding Dojo 🏆.
                Curiosity drives me 👀, and I thrive on solving problems 🔥. My expertise spans designing reliable IT systems and creating intuitive digital experiences 😎. For me, coding and network design are like assembling a puzzle 🤓 a creative process that transforms ideas into innovative solutions, simplifying life for users 🙋.</p>
            </div>   
    </div>        
    <div className='aboutbuttom'>
        <div>
            <h3>Contact</h3>
            <p>mhamedbengharbia@gmail.com</p>
        </div>
        <div>
            <h3>Phone</h3>
            <p>(+216) 21 420 848</p>
        </div>
        <div>
            <h3>Date of birth</h3>
            <p>November 02, 1994</p>
        </div>
        <div>
            <h3>Spoken Languages</h3>
            <p>English - Arabic - French</p>
        </div>
        <div id="interets">
            <h3>Interest</h3>
            <p>Camping, Reading, Technology</p>
        </div>
    </div>
    <hr />

    </div>   

  );
}


 



export default About;
