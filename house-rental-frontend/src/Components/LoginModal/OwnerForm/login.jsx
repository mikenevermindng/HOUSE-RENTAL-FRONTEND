import React, {useState} from "react";
import {apiOwnerLogin} from "../../../Services/owner_service";
import '../style.css';

function Login() {
    const [ownerInfo, setOwnerInfo] = useState({});

    const onChangeHandler = (event) => {
        console.log(ownerInfo);
        setOwnerInfo({...ownerInfo, [event.target.name]: event.target.value});
    };

    const onSubmitLoginForm = () => {
        const response = apiOwnerLogin(ownerInfo);
    };

    return (
        <div className="form-container sign-in-container">
            <h1>Đăng nhập</h1>
            <div className="form-wrapper">
                <form action="#">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={onChangeHandler}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        onChange={onChangeHandler}
                    />

                    <button onClick={onSubmitLoginForm}>Đăng nhập</button>

                    <p className="mobile-text">
                        Bạn chưa có tài khoản? Vui lòng đăng ký.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
