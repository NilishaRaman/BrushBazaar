import React, { useState } from 'react';
import './LivingRoomView.css';

const LivingRoomView = () => {
  const [sortBy, setSortBy] = useState('Position');

  const paintings = [
    { id: 1, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg', sold: true },
    { id: 2, name: 'CITY 12', size: '30*20 inches', price: 18200.00, image: 'path/to/city12.jpg' },
    { id: 3, name: 'CITY 07', size: '30*20 inches', price: 18200.00, image: 'path/to/city07.jpg' },
    { id: 4, name: 'SUNSET PAINTING 12', size: '20*30 inches', price: 18200.00, image: 'path/to/sunset12.jpg' },
    { id: 5, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg' },
    { id: 6, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg' },
    { id: 7, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg' },
    { id: 8, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg', sold: true },
    { id: 9, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg' },
    { id: 10, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg' },
    { id: 11, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg' },
    { id: 12, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg' },
    { id: 13, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg' },
    { id: 14, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg' },
    { id: 15, name: 'CITY 15', size: '15*22 inches', price: 14000.00, image: 'path/to/city15.jpg', sold: true },
  ];

  return (
    <div className="living-room-view">
      <h1>Living Room View</h1>
      <div className="breadcrumb">
        <a href="/">Home</a> &gt; <a href="/room-by-view">Room by View</a> &gt; Living Room View
      </div>
      
      <div className="filters">
        <select>
          <option>Shape</option>
        </select>
        <select>
          <option>Color</option>
        </select>
        <select>
          <option>Medium</option>
        </select>
        <select>
          <option>Price</option>
        </select>
        <button>Clear All</button>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option>Sort by Position</option>
        </select>
      </div>

      <div className="painting-grid">
        {paintings.map(painting => (
          <div key={painting.id} className="painting-card">
            <img src={painting.image} alt={painting.name} />
            {painting.sold && <span className="sold-tag">Sold</span>}
            <h3>{painting.name}</h3>
            <p>{painting.size}</p>
            <p>₹{painting.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivingRoomView;