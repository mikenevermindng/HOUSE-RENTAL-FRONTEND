import React, { useState } from "react";
import "./style.css";
import { apiUserLogin } from "../../Services/user_sevice";

function Login() {
  const [userInfo, setUserInfo] = useState({});

  const onChangeHandler = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onSubmitLoginForm = () => {
    const response = apiUserLogin(userInfo);
    console.log(response)
  };

  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Đăng nhập</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChangeHandler}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          name="password"
          onChange={onChangeHandler}
        />
        <button onClick={onSubmitLoginForm}>Đăng nhập</button>

        <p className="text-mobile">
          Bạn chưa có tài khoản? Vui lòng đăng ký.
        </p>

      </form>
    </div>
  );
}

export default Login;
