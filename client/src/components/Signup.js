import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Signup({
  setUser,
  setIsLoggedIn,
  setTripCardData,
  setSignUpSubmitted,
}) {
  const [signUpData, setSignUpData] = useState({
    full_name: "",
    username: "",
    password: "",
  });

  function handleChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data["user"]) {
          setUser(data.user);
          setIsLoggedIn(true);
          localStorage.setItem("jwt", data.token);
          setTripCardData(data.groups);
          history.push("/");
        } else {
          alert(data["error"]);
        }
      });
    setSignUpData({ full_name: "", username: "", password: "" });
  }
  const history = useHistory();

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="logo">TRIP-E</h1>
      <h3 className="tagline">Start Tripping</h3>
        <label>
          <input
            type="text"
            name="full_name"
            onChange={handleChange}
            value={signUpData.full_name}
            placeholder="Name"
            className="input-fields"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={signUpData.username}
            placeholder="Username"
            className="input-fields"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={signUpData.password}
            placeholder="Password"
            className="input-fields"
          />
        </label>
        <br />
        <button type="submit" className="login-signup-button">
          Sign Up!
        </button>
        <br />
        <Link to="/login" className="login-membersignup">Login</Link>
      </form>
    </div>
  );
}
