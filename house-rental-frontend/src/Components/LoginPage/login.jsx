import React, { useState } from "react";
import "./style.css";
import { apiUserLogin } from "../../Services/user_sevice";
function Login() {
  const [userInfo, setUserInfo] = useState({});

  const onChangeHandler = (event) => {
    console.log(userInfo);
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onSubmitLoginForm = () => {
    const response = apiUserLogin(userInfo);
    console.log(response)
  };

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
          name="email"
          onChange={onChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChangeHandler}
        />
        <a href="#">Forgot your password?</a>
        <button onClick={onSubmitLoginForm}>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
