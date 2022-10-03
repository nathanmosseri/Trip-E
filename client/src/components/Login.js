import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export default function Login({ setUser, setIsLoggedIn }) {
  const [loginData, setLoginData] = useState({username: '', password: ''});
  const history = useHistory()
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
      history.push("/")
    });
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className='signupform'>
      <label>
            Username:
            <input type="text" name="username" value={loginData.username} onChange={handleLogin}/>
        </label>
        <br />
        <label>
            Password:
            <input type="password" name="password" value={loginData.password} onChange={handleLogin}/>
        </label>
        <br />
        <button type="submit">Login</button>
        <br />
      <Link to='/signup'>Not a member?<br/>
        Sign up!</Link>
      </form>
    </div>
  )
}