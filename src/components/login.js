import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Hardcoded credentials for demonstration
  const registeredEmail = 'BrushBazaar@gmail.com';
  const registeredPassword = 'password123';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === registeredEmail && password === registeredPassword) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="l">Login Form</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;