import React, { useState } from "react";
import { apiOwnerRegister } from "../../Services/owner_service";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";

function Register() {
  const [ownerInfo, setOwnerInfo] = useState({});

  const onChangeHandler = (event) => {
    console.log(ownerInfo);
    setOwnerInfo({ ...ownerInfo, [event.target.name]: event.target.value });
  };
  const onSubmitRegisterForm = () => {
    const response = apiOwnerRegister(ownerInfo);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {/* <ToastContainer /> */}
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold justify-center text-center">
              Sign Up for EasyAccomod
            </h1>

            <form
              className="w-full flex-1 mt-8 text-indigo-500"

              // onSubmit={handleSubmit}
            >
              <div className="mx-auto max-w-xs relative ">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="ownername"
                  placeholder="Name"
                  onChange={onChangeHandler}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="citizenId"
                  placeholder="ID Number"
                  onChange={onChangeHandler}
                ></input>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="address"
                  placeholder="Address"
                  onChange={onChangeHandler}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={onChangeHandler}
                ></input>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={onChangeHandler}
                />

                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  onChange={onChangeHandler}
                  name="password"
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={onSubmitRegisterForm}
                >
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  <span className="ml-3">Sign up</span>
                </button>
              </div>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign with email or social login
                </div>
              </div>
              <div className="flex flex-col items-center">
                <a
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                >
                  <i className="fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500" />
                  <span className="ml-4">Sign In</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
