import React, { useState } from 'react';
import './Signup.css';
import { signupUser } from '../api/signup.js';  
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [username, setUsername] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const userData = { username, email, password, confirmPassword };

    try {
      const data = await signupUser(userData);

      // Handle success response
      // setSuccessMessage('User created successfully');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setUsername('');
      setTimeout(() => {
        navigate('/login');  
      }, 100); 
    } catch (error) {
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <section className="signup-container">
        <div className="form-container">
          <h1 className="form-header">Create an account</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-field">
            <label htmlFor="username">Username</label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Enter your Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="confirm-password">Confirm password</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <button type="submit" className="submit-button">
              Create an account
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
