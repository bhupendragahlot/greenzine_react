
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter username and password.');
      return;
    }

    // Check if username and password are correct
    if (username === 'greendzine' && password === 'green@123') {
      // Call the onLogin function passed from the parent component
      onLogin(username, password);
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <img
          src="Group3@2x.png"
          alt="Company Logo"
          style={{
            width: '100px',
            marginBottom: '20px',
            animation: 'spin 2s linear infinite', // Apply animation
          }}
        />
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', animation: 'fadeIn 1s ease' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginLeft: '5px', animation: 'slideInLeft 1s ease' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: '5px', animation: 'slideInRight 1s ease' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ animation: 'slideInUp 1s ease' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
