import React, {useState} from "react";
import "../style.css";

function LoginPage({children}) {
    return (
        <div className="form-container-wrapper">
            <div
                className={`sign-in-box`}
                id="sign-in-box"
            >
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