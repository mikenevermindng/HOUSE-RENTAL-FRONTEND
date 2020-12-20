import React, { useState } from "react";
import "../style.css";
import { apiUserRegister } from "../../../Services/user_sevice";
function Register() {
  const [userInfo, setUserInfo] = useState({});

  const onChangeHandler = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onSubmitLoginForm = () => {
    const response = apiUserRegister(userInfo);
  };

  return (
    <div className="form-container sign-up-container">
      <h1>Tạo tài khoản</h1>
      <div className="form-wrapper">
        <form action="#">
          <input
              type="text"
              placeholder="Họ tên"
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
              type="tel"
              placeholder="Số điện thoại"
              name="phone"
              onChange={onChangeHandler}
          />
          <input
              type="password"
              placeholder="Mật khẩu"
              name="password"
              onChange={onChangeHandler}
          />
          <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              name="password"
              onChange={onChangeHandler}
          />
          <button onClick={onSubmitLoginForm}>Đăng ký</button>

          <p className="mobile-text">
            Bạn đã có tài khoản? Vui lòng đăng nhập.
          </p>

        </form>
      </div>
    </div>
  );
}

export default Register;
