import { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./login";
import Register from "./register";
// import "./style.css";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";

function LoginForOwner() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const onOpenModalLogin = () => setLogin(true);
  const onCloseModalLogin = () => setLogin(false);
  const onOpenModalRegister = () => setRegister(true);
  const onCloseModalRegister = () => setRegister(false);
  return (
    <div>
      <button onClick={onOpenModalLogin}>Owner Login</button>
      <Modal open={login} onClose={onCloseModalLogin} center>
        <Login></Login>
        <button onClick={onOpenModalRegister}>Owner Register</button>
      </Modal>

      <Modal open={register} onClose={onCloseModalRegister} center>
        <Register></Register>
      </Modal>
    </div>
  );
}
export default LoginForOwner;
