import React, { useState } from 'react';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle API request to check the credentials.
    console.log('Login Data:', loginData);

    // Simulated response check:
    if (loginData.username !== "expectedUsername" || loginData.password !== "expectedPassword") {
      setLoginError('Username or password is incorrect. Please try again.');
    } else {
      setLoginError('');
      console.log("Login successful!"); // Redirect or manage login session
    }
  };

  return (
    <div id="loginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={loginData.username} onChange={handleChange} /><br/>
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} /><br/>
        
        <button type="submit" id="loginSubmitButton">Login</button>
        
        {loginError && <p id="loginError" style={{ color: 'red' }}>{loginError}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
