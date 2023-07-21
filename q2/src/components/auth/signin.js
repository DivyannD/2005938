// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://20.244.56.144/train/auth/', {
        username,
        password,
      });

      // Assuming the server returns an access token upon successful authentication
      const accessToken = response.data.accessToken;

      // Store the access token in localStorage
      localStorage.setItem('accessToken', accessToken);

      // Clear any previous error message on successful login
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Invalid username or password');
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
