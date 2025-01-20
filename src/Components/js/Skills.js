import React from 'react';
import './style.css';
import img1 from "../src/server.webp";
import img2 from "../src/reseau.webp";
import img3 from "../src/web.webp";

function Skills() {
 

  return (
    <div className="Skills"  id="skills">
      <div className='skillstop'>
        <h1>I'm Glad You're Still Here</h1>
        <p>"Like a child solving a puzzle, I find passion in designing and implementing networking solutions that connect systems seamlessly and enhance communication."
        </p>
      </div>

    <div className='buttomskills'>
        <div> 
            <img src={img2} />    
            <h1>CCNA</h1>
            <p>I implemente and troubleshoot network systems based on CCNA standards. I focus on creating robust, efficient, and scalable network solutions.</p>
            <h1>Tools:</h1>
            <ul>
    <li>Network Configuration</li>
    <li>Routing and Switching</li>
    <li>Subnetting</li>
    <li>Network Security</li>
    <li>VLSM IP Address Management</li>
    <li>RIP OSPF Dynamic Routing</li>
    <li>IPv4 and IPv6 Addressing</li>
    <li>Virtualization</li>
    <li>LAN/WAN Design</li>
    <li>NAT</li>
</ul>
        </div>
       
       

        <div> 
            <img src={img1} />    
            <h1>Systems Administration </h1>
<p>I specialize in various IT and networking technologies, focusing on secure, efficient, and scalable solutions for modern infrastructure needs.</p>
<h1>Skills:</h1>
<ul>
    <li>FTP</li>
    <li>RADIUS</li>
    <li>NFS</li>
    <li>DNS</li>
    <li>LDAP</li>
    <li>pfSense</li>
    <li>Snort</li>
     <li>Apache</li>
    <li>Telnet SSH</li>
     <li>Samba</li>
</ul>
        </div>




        <div> 
            <img src={img3} />    
            <h1>Dev Skills</h1>
            <p>I value simple content structure, clean design patterns and I like to code things from scratch, and enjoy bringing ideas to life in the Web browser.
            </p>
            <h1>Languages :</h1>
            <ul>
    <li>MERN</li>
    <li>PYTHON</li>
    <li>C# .NET</li>
    <li>WORDPRESS</li>
    <li>GITHUB</li>
    <li>FLASK</li>
     <li>SQL</li>
    <li>OOP</li>
     <li>Express</li>
    <li>JavaScript</li>
</ul>
        </div>
    </div>
 
    </div>
  );
}

export default Skills;
