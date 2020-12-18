import { useState } from "react";
import Login from "./login";
import Register from "./register";
import "./style.css";

function LoginPage() {
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
    <>
      <div
        class={`sign-in-box ${isSwitch ? "right-panel-active" : ""}`}
        id="sign-in-box"
      >
        <Login></Login>
        <Register></Register>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn" onClick={onSignInButtonClick}>
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp" onClick={onSignUpButtonClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Created with <i class="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
          >
            here
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default LoginPage;
