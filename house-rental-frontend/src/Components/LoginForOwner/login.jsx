import "./style.css";
import { apiOwnerLogin } from "../../Services/owner_service";
import React, { useState } from 'react'

function Login() {
  const [ownerInfo, setOwnerInfo] = useState({});

  const onChangeHandler = (event) => {
    console.log(ownerInfo);
    setOwnerInfo({ ...ownerInfo, [event.target.name]: event.target.value });
  };

  const onSubmitLoginForm = () => {
    const response = apiOwnerLogin(ownerInfo);
    console.log(response)
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={onChangeHandler}
      ></input>
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={onChangeHandler}
      />
      <button onClick={onSubmitLoginForm}>Sign In</button>
    </div>
  );
}

export default Login;
