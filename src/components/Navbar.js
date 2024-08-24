import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import lock from "./images/lock.png";
import twitter from './images/twitter-icon.png';
import facebook from './images/facebook-img.png';
import youtube from "./images/youtube-icon.png";
import pinterest from "./images/Pinterest-icon.png";
// import logo from "./images/logo_brush_bazaar.png";
// import cart from "./images/cart.jpg";
import profile from "./images/profile_icon.jpg";
import menu from "./images/menu_bar.jpg";
import { useCart } from './CartContext';
import cartIcon from './images/cart.jpg';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { cart } = useCart();
  // const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showShowByRoomDropdown, setShowShowByRoomDropdown] = useState(false);

  // const goToLoginPage = () => {
  //   navigate("/login");
  // };

  return (
    <>
      {/* Header -- within black strip on the top head */}
      <nav style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '5px',
        backgroundColor: '#2c3e50',
        color: 'white'
      }}>
        {/* Social Media Icons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <a href="https://x.com/?lang=en"><img src={twitter} alt="Twitter" height={25} width={25} /></a>
          <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook" height={25} width={25} /></a>
          <a href="https://www.youtube.com/"><img src={youtube} alt="YouTube" height={25} width={25} /></a>
          <a href="https://in.pinterest.com/"><img src={pinterest} alt="Pinterest" height={25} width={25} /></a>
        </div>

        {/* Register and Login Buttons */}
        <div style={{ marginRight: '250px' }}>
          <Link to="/BrushBazaar/src/components/Register.js">
          <button className="register-button" >REGISTER</button>
          </Link>

          <Link to="/BrushBazaar/src/components/login.js">
          <button className="login-button">
            <a href="*"><img src={lock} alt="." width={20} height={20} /></a>LOGIN
          </button>
          </Link>
        </div>
      </nav>

      {/* Main Navigation Bar */}
      <nav className="navbar">

        <div className="logo-container">
        {/* <img src={logo} alt="BRUSH BAZAAR" className="logo" / > */}
        <h2 className='logo'><b><i>BRUSH BAZAAR</i></b></h2>
        </div>


        <ul className="nav-links">

        <li><a href="/">HOME</a></li>

          <li 
            className="has-dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >

            <a href="/paintings">PAINTINGS</a>
            {showDropdown && (
              <div className="dropdown">
                <div className="dropdown-column">
                  <h3>ABSTRACT PAINTINGS</h3>
                  <a href="*">Geometric Paintings</a>
                  <a href="*">Modern Art, Contemporary Art</a>
                  <a href="*">Trendy Abstract Paintings</a>
                  <h3>PORTRAIT PAINTINGS</h3>
                  <a href="*">Lady Paintings</a>
                  <a href="*">African Paintings</a>
                  <a href="*">Couple Paintings</a>
                  <a href="*">Children Paintings</a>
                  <a href="*">Hyper Realistic Paintings</a>
                </div>
                <div className="dropdown-column">
                  <h3>INDIAN PAINTINGS</h3>
                  <a href="*">Folk Art Paintings</a>
                  <a href="*">Tribal Paintings</a>
                  <a href="*">Temple Paintings, Monument Paintings</a>
                  <a href="*">Rajasthani Paintings</a>
                  <a href="*">Traditional Art</a>
                  <a href="*">Village Paintings</a>
                  <a href="*">Madhubani Paintings</a>
                  <a href="*">Warli Art</a>
                  <a href="*">Gond Paintings</a>
                  <h3>STILL LIFE PAINTINGS</h3>
                  <a href="*">Music Instruments Paintings</a>
                  <a href="*">Object Paintings</a>
                </div>
                <div className="dropdown-column">
                  <h3>LANDSCAPE PAINTINGS</h3>
                  <a href="*">Cityscape Paintings</a>
                  <a href="*">Building Paintings</a>
                  <a href="*">Transportation Paintings</a>
                  <a href="*">Seascape Painting, Ship Painting</a>
                  <a href="*">Nature Painting, Scenery Painting</a>
                  <a href="*">Flower Paintings</a>
                  <a href="*">Sunset Paintings</a>
                  <h3>ANIMALS, BIRDS PAINTINGS</h3>
                  <a href="*">Running Horse Paintings</a>
                  <a href="*">Dog, Cat Paintings</a>
                  <a href="*">Animals Paintings</a>
                  <a href="*">Peacock Paintings</a>
                  <a href="*">Birds Paintings</a>
                </div>
                <div className="dropdown-column">
                  <h3>STYLE</h3>
                  <a href="*">Impressionistic</a>
                  <a href="*">Futuristic</a>
                  <a href="*">Abstract</a>
                  <a href="*">Decorative</a>
                  <a href="*">Minimalistic</a>
                  <a href="*">Realistic</a>
                  <a href="*">Conceptual</a>
                  <a href="*">Contemporary</a>
                  <a href="*">PopArt</a>
                  <a href="*">Expressionistic</a>
                  <a href="*">Cubism</a>
                  <a href="*">Illustration</a>
                  <a href="*">Surrealism</a>
                </div>
                <div className="dropdown-column">
                  <h3>MEDIUM</h3>
                  <a href="*">Acrylic</a>
                  <a href="*">Oil</a>
                  <a href="*">Watercolor</a>
                  <a href="*">Mixed Media</a>
                  <a href="*">Charcoal</a>
                  <h3>SURFACE</h3>
                  <a href="*">Canvas</a>
                  <a href="*">Art Paper</a>
                </div>
              </div>
            )}
          </li>
          <li
            className={`has-dropdown ${showShowByRoomDropdown ? 'open' : ''}`}
            onMouseEnter={() => setShowShowByRoomDropdown(true)}
            onMouseLeave={() => setShowShowByRoomDropdown(false)}
          >
            <a href="/show-by-room">SHOW BY ROOM</a>
            {showShowByRoomDropdown && (
              <div className="dropdown">
                <div className="dropdown-column">
                <li><a href="/living-room-view">Living Room View</a></li>
                <li><a href="/living-room-view">Bed Room View</a></li>
                <li><a href="/living-room-view">Study Room View</a></li>
                <li><a href="/living-room-view">dining Room View</a></li>
                </div>
              </div>
            )}
          </li>
          {/* <li><a href="/top-collections">TOP COLLECTIONS</a></li> */}
          
          
          <Link to="/BrushBazaar/src/components/BlogPosts.js">
          <li><a href="/blog">BLOG</a></li>
          </Link>

          <Link to="/BrushBazaar/src/components/Contact.js">
          <li><a href="/commission-art">CONTACT</a></li>
          </Link>
        </ul>
        <div className="nav-icons">
        <a href="/cart" className="cart-icon" >
          <img src={cartIcon} alt="cart" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          
        </a>
          
          <a href="/BrushBazaar/src/components/login.js" ><img src={profile} alt="profile" /></a>
          
          <a href="*"><img src={menu} alt="menu bar" /></a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;