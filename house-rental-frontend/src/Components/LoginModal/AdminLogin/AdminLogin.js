import React, {useState} from "react";
import "../style.css";
import CloseIcon from "../../../Asset/Icon/close.svg";

function LoginPage({children}) {
    return (
        <div className="form-container-wrapper">
            <div
                className={`sign-in-box`}
                id="sign-in-box"
            >
                <img id="close-button" alt="close" src={CloseIcon}/>
                {children}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Xin chào Admin của EasyAccomod!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;