import React from 'react';
import './image_grid.css';
import truck from './images/truck.png';
import gift from './images/gift.png';
import wallet from './images/wallet.png';
import offer from './images/offers.jpg';

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="grid-item yellow">
        <img src={truck} alt="Delivery" />
        <p>Delivery</p>
        <p>Fastest Delivery Support.</p>
      </div>
      <div className="grid-item orange">
        <img src={gift}alt="Gift" />
        <p>Gift</p>
        <p>Exciting Gifts Awaits .</p>
      </div>
      <div className="grid-item blue">
        <img src={wallet} alt="Wallet" />
        <p>Wallet</p>
        <p>Fastest Payment Service.</p>
      </div>
      <div className="grid-item green">
        <img src={offer} alt="offers" />
        <p>Offers</p>
        <p>Highest Discount Rate.</p>
      </div>
    </div>
  );
};

export default ImageGrid;
