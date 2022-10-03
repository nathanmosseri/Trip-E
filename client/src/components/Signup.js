import React, { useState } from 'react'

export default function Signup({ onLogin }) {
  const initialState = {name: '', username: '', password: ''}
  const [signUpInfo, setSignUpInfo] = useState(initialState)

  function handleChange(e){
    setSignUpInfo({...signUpInfo, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(signUpInfo),
        })
        .then((r) => r.json())
        .then((user) => onLogin(user))
        setSignUpInfo(initialState)
    }

  return (
    <div className='login'>
      <form className="signupform" onSubmit={handleSubmit}>
      <label >
            Name:
            <input type="text" name="name" onChange={handleChange} value={signUpInfo.name}/>
        </label>
        <br />
      <label>
            Username:
            <input type="text" name="username" onChange={handleChange} value={signUpInfo.username}/>
        </label>
        <br />
        <label>
            Password:
            <input type="text" name="password" onChange={handleChange} value={signUpInfo.password}/>
        </label>
        <br />
        <button type="submit" className="submitbutton">Sign Up!</button>
        <br />
      </form>
    </div>
  )
}
