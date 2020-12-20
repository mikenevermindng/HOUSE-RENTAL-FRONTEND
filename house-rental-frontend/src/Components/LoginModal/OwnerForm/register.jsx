import React, {useState} from "react";
import {apiOwnerRegister} from "../../../Services/owner_service";
import '../style.css';

function Register() {
    const [ownerInfo, setOwnerInfo] = useState({});

    const onChangeHandler = (event) => {
        setOwnerInfo({...ownerInfo, [event.target.name]: event.target.value});
    };
    const onSubmitLoginForm = () => {
        const response = apiOwnerRegister(ownerInfo);
    };

    return (
        <div className="form-container sign-up-container">
            <h1>Tạo tài khoản</h1>

            <div className="form-wrapper">

                <form action="#">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Tên"
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Họ"
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="citizenId"
                        placeholder="Số CMND"
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="Thành phố"
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Địa chỉ"
                        onChange={onChangeHandler}
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Số điện thoại"
                        onChange={onChangeHandler}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={onChangeHandler}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        onChange={onChangeHandler}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Nhập lại mật khẩu"
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
