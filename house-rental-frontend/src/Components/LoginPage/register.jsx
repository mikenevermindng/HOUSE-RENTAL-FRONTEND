import React, { useState } from "react";
import "./style.css";
import { apiUserRegister } from "../../Services/user_sevice";
function Register() {
  const [userInfo, setUserInfo] = useState({});

  const onChangeHandler = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onSubmitLoginForm = () => {
    const response = apiUserRegister(userInfo);
    console.log(response)
  };

  return (
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Tạo tài khoản</h1>
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

        <p className="text-mobile">
          Bạn đã có tài khoản? Vui lòng đăng nhập.
        </p>

      </form>
    </div>
  );
}

export default Register;
