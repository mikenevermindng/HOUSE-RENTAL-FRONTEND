import React, { Component, useState } from "react";
import axios from "axios";
import "./style.css";
import { apiUserRegister } from "../../Services/user_sevice";
function Register() {
  const [userInfo, setUserInfo] = useState({});

  const onChangeHandler = (event) => {
    console.log(userInfo);
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const onSubmitLoginForm = () => {
    const response = apiUserRegister(userInfo);
  };

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
          name="name"
          onChange={onChangeHandler}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          onChange={onChangeHandler}
        />
        <button onClick={onSubmitLoginForm}>Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
