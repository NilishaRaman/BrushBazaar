import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOrder = {
      productName,
      quantity,
      price: parseFloat(price),
    };

    try {
      await axios.post('http://localhost:8090/api/orders', newOrder); // URL of the Spring Boot backend
      setProductName('');
      setQuantity(1);
      setPrice('');
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
