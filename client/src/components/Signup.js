import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup({ setUser }) {
  const [signUpData, setSignUpData] = useState({full_name: '', username: '', password: ''})

  function handleChange(e){
    setSignUpData({...signUpData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(signUpData),
        })
        .then((r) => r.json())
        .then((user) => console.log(user))
    }

  return (
    <div className='login'>
      <form className="signupform" onSubmit={handleSubmit}>
      <label >
            Name:
            <input type="text" name="full_name" onChange={handleChange} value={signUpData.full_name}/>
        </label>
        <br />
      <label>
            Username:
            <input type="text" name="username" onChange={handleChange} value={signUpData.username}/>
        </label>
        <br />
        <label>
            Password:
            <input type="text" name="password" onChange={handleChange} value={signUpData.password}/>
        </label>
        <br />
        <button type="submit" className="submitbutton">Sign Up!</button>
        <br />
        <Link to='/login'>Login</Link>
      </form>
    </div>
  )
}
