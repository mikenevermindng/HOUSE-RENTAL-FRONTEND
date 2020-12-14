import React, { Component, useState } from "react";
import axios from "axios";
import "./style.css";
import { apiUserLogin } from "../../Services/user_sevice";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = async () => {
  //   const { data } = await axios({
  //     method: "POST",
  //     url: "http://localhost:3001/login",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: { email, password },
  //   });
  // };

  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePass}
        />
        <a href="#">Forgot your password?</a>
        <button onClick={apiUserLogin}>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
