import axios from 'axios';
import { API_BASE_URL } from './api/bootapi'; 

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
});

export const fetchCart = async () => {
  const response = await apiClient.get('/localhost:8090/cart');
  return response.data;
};

export const checkout = async (orderData) => {
  const response = await apiClient.post('/api/checkout', orderData);
  return response.data;
};

export const clearCart = async () => {
  const response = await apiClient.post('/api/cart/clear');
  return response.data;
};

export const updateCartItem = async (itemId, quantity) => {
  const response = await apiClient.post(`/api/cart/update`, { itemId, quantity });
  return response.data;
};

export const removeCartItem = async (itemId) => {
  const response = await apiClient.delete(`/api/cart/${itemId}`);
  return response.data;
};
