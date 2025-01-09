import React  from "react";
import './style.css';
 
function Contact() {
  
  
        return (
          <div class="Contact"  id="contact">
        <h1>Dont be a stranger!👋</h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.        </p>
        <form>
    <div className="c1">
        <div>
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
        </div>
        <div>
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
        </div>
    </div>
    
    <div className="c2">
        <label for="message">Your Message</label>
        <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
    </div>
    
    <div className="c3">
        <button type="submit">SEND IT</button>
    </div>
</form>

        </div>
        );
      };
    

export default Contact;
