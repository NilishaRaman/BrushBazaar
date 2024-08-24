import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shipping, setShipping] = useState(10); // Fixed shipping cost

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setLoading(true);
    setError(null);
    try {
      setCart((prevCart) => {
        const existingItem = prevCart.find(item => item.id === product.id);
        if (existingItem) {
          return prevCart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    } catch (err) {
      setError('Failed to add item to cart');
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = (productId) => {
    setLoading(true);
    setError(null);
    try {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } catch (err) {
      setError('Failed to remove item from cart');
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    setLoading(true);
    setError(null);
    try {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (err) {
      setError('Failed to update quantity');
    } finally {
      setLoading(false);
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,   
      clearCart,
      getTotalPrice,
      loading,
      error,
      shipping,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);