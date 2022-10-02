import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");

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
  
  return (
    <div>
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
      <button>Not a member?{'\n'}
        Sign up!</button>
    </div>
  )
}
