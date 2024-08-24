import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';
import OrderHistory from './OrderHistory';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, loading, error, shipping } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('cash-on-delivery');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', mobile: '' });
  const [formErrors, setFormErrors] = useState({});
  const [userId, setUserId] = useState(1); // Assume user ID is 1 for demo purposes

  useEffect(() => {
    calculateTotals();
  }, [cart, shipping]);

  const calculateTotals = () => {
    const newSubtotal = getTotalPrice();
    const newTax = newSubtotal * 0.1; // Assuming 10% tax
    const newTotal = newSubtotal + newTax + shipping;

    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newTotal);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    if (paymentMethod === 'cash-on-delivery') {
      setShowForm(true);
    } else {
      alert('Checkout functionality for other payment methods to be implemented.');
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const errors = {};
  
      if (!formData.name) {
      errors.name = 'Name is required';
      } else if (!/^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/.test(formData.name)) {
      errors.name = 'Name should contain only alphabets and should not start with a space';
      }
  

  
    if (!formData.address) {
      errors.address = 'Address is required';
    }
  
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = 'Valid mobile number is required';
    }
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    try {
      const orderData = {
        userId,
        items: cart,
        paymentMethod,
        ...formData,
        subtotal,
        tax,
        total,
        shipping
      };
      const response = await axios.post('http://localhost:8090/cart/checkout', orderData);
      console.log(response.data); // Log the response data
      alert('Order placed successfully!');
      clearCart();
      setShowForm(false);
      setFormData({ name: '', address: '', mobile: '' });
    } catch (error) {
      console.error("Error placing order:", error.response ? error.response.data : error.message);
      alert('Failed to place order');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <OrderHistory userId={userId} /> {/* Display previous orders */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p> ₹{item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Subtotal:  ₹{subtotal.toFixed(2)}</p>
            <p>Tax (10%):  ₹{tax.toFixed(2)}</p>
            <p>Shipping:  ₹{shipping.toFixed(2)}</p>
            <p>Total:  ₹{total.toFixed(2)}</p>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment-method"
                  value="cash-on-delivery"
                  checked={paymentMethod === 'cash-on-delivery'}
                  onChange={handlePaymentMethodChange}
                />
                Cash on Delivery
              </label>
              <label>
                <input
                  type="radio"
                  name="payment-method"
                  value="other-payment"
                  checked={paymentMethod !== 'cash-on-delivery'}
                  onChange={handlePaymentMethodChange}
                />
                Other Payment Methods (to be implemented)
              </label>
            </div>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}

      {showForm && (
        <div className="checkout-form">
          <h3>Checkout Details</h3>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
              {formErrors.name && <p className="error-text">{formErrors.name}</p>}
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
              />
              {formErrors.address && <p className="error-text">{formErrors.address}</p>}
            </div>
            <div>
              <label>Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleFormChange}
              />
              {formErrors.mobile && <p className="error-text">{formErrors.mobile}</p>}
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
