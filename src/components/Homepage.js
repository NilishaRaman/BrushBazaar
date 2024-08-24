import React from 'react';
import './Homepage.css'; // Import your CSS file
import butterfly from './images/butterfly.jpg'
import camera from './images/camera.jpg'
import feature1 from './images/feature_1.png'
import feature2 from './images/feature_2.png'
import feature3 from './images/feature_3.png'
import feature4 from "./images/feature_4.png"

const Homepage = () => {
  return (
    <div className='heading'>
      <h2>Welcome to Brush Bazaar :A Perfect Present</h2>
      <p className='para_prop'>
      "As Picasso said, 'I am always searching, always looking, always trying.' Art is a journey, not a destination. As Matisse believed, 'The important thing is to keep one's mind open, to be receptive to new ideas.' Every stroke, every color choice, is a chance to express oneself, as Van Gogh proclaimed, 'The only way to learn to love is to love.' And as Michelangelo famously said, 'The greatest danger is not in taking too little, but in aiming too low and settling for too little.'"
</p>


      <div className="homepage">
      <div className="left-section">
        <img className ="left-section-img1" src={camera} alt="Plant"  height={300} width={300}/>
        <img className ="left-section-img2" src={butterfly} alt="Butterfly" height={700} width={700}/>
      </div>

      <div className="right-section">
        <div>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={feature1} alt="Feature 1" />
            <h2>Orders</h2>
            <p>You can select items and order them anytime and anywhere.</p>
          </div>
          <div className="feature-card">
            <img src={feature2} alt="Feature 2" />
            <h2>Wishlist /Add to cart</h2>
            <p>You can choose any favorite item and wishlist them. Later, you may order them anytime.</p>
          </div>
          <div className="feature-card">
            <img src={feature3} alt="Feature 3" />
            <h2>Offers</h2>
            <p>People sometimes find attractive promotions or discounts </p>
          </div>
          <div className="feature-card">
            <img src={feature4} alt="Feature 4" />
            <h2>Help Centre</h2>
            <p>Get help anytime with our round-the-clock customer service. You can reach us at info@brushbazaar.com.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    

  );
};

export default Homepage;
