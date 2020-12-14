import React, { Component, useState } from "react";
import axios from "axios";
import "./style.css";
import { apiUserRegister } from "../../Services/user_sevice";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
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
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" class="social">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#" class="social">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
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
        <button onClick={apiUserRegister}>Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
