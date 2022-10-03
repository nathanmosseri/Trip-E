import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";

export default function Login({ setUser, setIsLoggedIn }) {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const history = useHistory();
  function handleLogin(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        if (data["user"]) {
          history.push("/");
        } else {
          alert(data["error"]);
        }
      });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleLogin}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={loginData.password}
            onChange={handleLogin}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <br />
      </form>
    </div>
  );
}
