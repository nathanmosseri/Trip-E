import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Signup from './Signup';

export default function Login({ setUser }) {
  const [loginData, setLoginData] = useState({username: '', password: ''});
  const [signUp, setSignUp] = useState(true);

  function handleLogin(e) {
    setLoginData({...loginData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
    .then((r) => r.json())
    .then((user) => {
      setUser(user)
    });
  }

  function handleClick(e){
    setSignUp(prev => !prev)
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
      <label>
            Username:
            <input type="text" name="username" value={loginData.username} onChange={handleLogin}/>
        </label>
        <br />
        <label>
            Password:
            <input type="text" name="password" value={loginData.password} onChange={handleLogin}/>
        </label>
        <br />
        <button type="submit" onClick={handleClick}>Login</button>
        <br />
      </form>
      {signUp ? <button onClick={handleClick}>Not a member?{'\n'}
        Sign up!</button> : <Signup />}
    </div>
  )
}

