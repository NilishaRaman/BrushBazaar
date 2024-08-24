
import React from 'react';
import './Contact.css'; // Import a CSS file if you want to add styles

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-info">
        <p><strong>Email:</strong> contact@brushbazaar.com</p>
        <p><strong>Phone:</strong> +1-234-567-8900</p>
        <p><strong>Address:</strong> 123 Art Lane, Creativity City, CA 90001</p>
      </div>
      
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;