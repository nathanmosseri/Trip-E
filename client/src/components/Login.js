import React from 'react'

export default function Login() {
  // const [login, setLogin] = useState({username: '', password: ''})

  // function handleChange(e){
  //   setLogin({...login, [e.target.name]: e.target.value})
  // }

  // function handleSubmit(e){
  //   e.preventDefault()
  //   fetch('/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(login),
  //   })
  //   .then((r) => r.json())
  //   .then((data))
  // }
  return (
    <div>
      <form >
      <label>
            Username:
            <input type="text" name="username" />
        </label>
        <br />
        <label>
            Password:
            <input type="text" name="password" />
        </label>
        <br />
        <button>Not a member?{'\n'}
        Sign up!</button>
      </form>
    </div>
  )
}
