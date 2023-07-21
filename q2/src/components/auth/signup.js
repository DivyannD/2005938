// Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [companyName, setCompanyName] = useState('');
  const [ownerName,setOwnerName] = useState('')
  const [rollNo,setRollno] = useState('')
  const [ownerEmail, setEmail] = useState('');
  const [accessCode, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
   

    try {
      const response = await axios.post('http://20.244.56.144/train/register', {
        companyName,
        ownerName,
        rollNo,
        ownerEmail,
        accessCode
      });
      // Handle successful signup
      console.log('User registered successfully:', response.data);
    } catch (error) {
      setErrorMessage('Error during registration');
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
       
        <input
          type="text"
          placeholder="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="rollno"
          value={rollNo}
          onChange={(e) => setRollno(e.target.value)}
        />
         <input
          type="email"
          placeholder="email"
          value={ownerEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Access Code"
          value={accessCode}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
