import React from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact Me</h1>
      <p>If you have any query? Let me know.</p>

      <form className="contact-form">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Your Email</label>
        <input type="email" placeholder="name@gmail.com" />

        <label>Subject</label>
        <input type="text" placeholder="Let me know how I can help you" />

        <label>Your Message</label>
        <textarea placeholder="Leave a comment or query..." rows="5"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;