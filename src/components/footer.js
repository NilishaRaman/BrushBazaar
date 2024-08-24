import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>BRUSHBAZAAR</h2>
          <p>BrushBazaar is your one-stop online shop for premium artwork and art supplies. Browse our curated selection of original art and high-quality materials. Contact us for personalized recommendations to fuel your artistic journey.</p>
        </div>
        
        <div className="footer-columns">
          <div className="footer-column">
            <h3>ARTWORK</h3>
            <ul>
              <li>Contemporary Art</li>
              <li>Impressionist Art</li>
              <li>Abstract Art</li>
              <li>Landscape Paintings</li>
              <li>Portrait Art</li>
              <li>Sculpture</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>ART SUPPLIES</h3>
            <ul>
              <li>Paints</li>
              <li>Brushes</li>
              <li>Canvas</li>
              <li>Easels</li>
              <li>Drawing Tools</li>
              <li>Art Paper</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>SHOP</h3>
            <ul>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Gift Cards</li>
              <li>Special Offers</li>
              <li>Artist Collaborations</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>FOR ARTISTS</h3>
            <p>Sell on BrushBazaar. We showcase talented emerging and established artists.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="contact-info">
          <p>PHONE: (555) 123-4567</p>
          <p>E-MAIL: info@brushbazaar.com</p>
        </div>
        
        <div className="social-media">
          <span>SOCIAL MEDIA</span>
          <a href="*" className="social-icon">Instagram</a>
          <a href="*" className="social-icon">Facebook</a>
          <a href="*" className="social-icon">Pinterest</a>
        </div>
        
        <div className="legal-links">
          <a href="*">Terms</a>
          <a href="*">Privacy</a>
          <a href="*">Accessibility</a>
        </div>
        
        <div className="copyright">
          © BrushBazaar.com 2024
        </div>
        
        <select className="currency-select">
          <option>India(INR  ₹)</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
    </footer>
  );
};

export default Footer;