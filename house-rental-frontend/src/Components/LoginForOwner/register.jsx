import React, { useState } from "react";
import { apiOwnerRegister } from "../../Services/owner_service";
import "./style.css";

function Register() {
  const [ownerInfo, setOwnerInfo] = useState({});

  const onChangeHandler = (event) => {
    console.log(ownerInfo);
    setOwnerInfo({ ...ownerInfo, [event.target.name]: event.target.value });
  };
  const onSubmitLoginForm = () => {
    const response = apiOwnerRegister(ownerInfo);
    console.log(response)
  };

  return (
    <div>
      <input
        type="text"
        name="ownername"
        placeholder="Name"
        onChange={onChangeHandler}
      ></input>
      <input
        type="text"
        name="citizenId"
        placeholder="ID Number"
        onChange={onChangeHandler}
      ></input>
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={onChangeHandler}
      ></input>
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={onChangeHandler}
      ></input>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={onChangeHandler}
      ></input>
      <button onClick={onSubmitLoginForm}>Sign Up</button>
    </div>
  );
}

export default Register;
