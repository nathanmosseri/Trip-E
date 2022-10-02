import React, { useState } from 'react';
import Signup from './Signup';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [signUp, setSignUp] = useState(true);

  function handleSubmit(e){
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
    .then((r) => r.json())
    .then((user) => onLogin(user));
  }

  function handleClick(e){
    setSignUp(prev => !prev)
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
      <label>
            Username:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <br />
        {/* <label>
            Password:
            <input type="text" name="password" />
        </label>
        <br /> */}
        <button type="submit">Login</button>
        <br />
      </form>
      {signUp ? <button onClick={handleClick}>Not a member?{'\n'}
        Sign up!</button> : <Signup onLogin={onLogin}/>}
    </div>
  )
}

