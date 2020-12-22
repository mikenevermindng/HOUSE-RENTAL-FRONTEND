import React, {useState} from "react";
import "./style.css";
import CloseIcon from "../../Asset/Icon/close.svg";
import {closePosterCreator} from "../../Store/ActionCreator/showPosterCreatorActionCreator";

function LoginPage({children}) {
    const [isSwitch, setIsSwitch] = useState(false);

    const onSignInButtonClick = (event) => {
        event.preventDefault();
        setIsSwitch(false);
    };

    const onSignUpButtonClick = (event) => {
        event.preventDefault();
        setIsSwitch(true);
    };

    return (
        <div className="form-container-wrapper">
            <div
                className={`sign-in-box ${isSwitch ? "right-panel-active" : ""}`}
                id="sign-in-box"
            >
                <img id="close-button" alt="close" src={CloseIcon}/>
                {children}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Chào mừng bạn quay lại!</h1>
                            <p>Nếu bạn đã có tài khoản, xin vui lòng đăng nhập.</p>
                            <button className="ghost" id="signIn" onClick={onSignInButtonClick}>
                                Đăng nhập
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Xin chào bạn!</h1>
                            <p>Nếu bạn chưa có tài khoản, xin vui lòng đăng ký.</p>
                            <button className="ghost" id="signUp" onClick={onSignUpButtonClick}>
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;