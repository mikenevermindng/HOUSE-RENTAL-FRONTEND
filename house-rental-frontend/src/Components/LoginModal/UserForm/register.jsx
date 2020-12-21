import React, { useState } from "react";
import "../style.css";
import { apiUserRegister } from "../../../Services/user_sevice";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { message } from 'antd'


const validationSchema = Yup.object().shape({
  email: Yup.string().email("Không nhận dạng được email").required("Vui lòng nhập địa chỉ email"),
  password: Yup.string().min(8, "Mật khẩu phải nhiều hơn 8 kí tự").required("Vui lòng nhập địa chỉ email"),
  changepassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Mật khẩu không trùng khớp"
    )
  }),
  username: Yup.string().min(3, "Tên người dùng tối thiểu 3 kí tự").required("Vui lòng nhập họ và tên"),
  phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại"),
})

function Register() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      phoneNumber: '',
      changepassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const register = await apiUserRegister(values)
      console.log(register)
      if (register) {
        message.success("Đăng kí thành công")
      } else {
        message.error("Email đã từng được sử dụng để tạo tài khoản trên website này")
      }
    }
  })


  const { touched, errors, handleSubmit, handleChange } = formik;

  return (
    <div className="form-container sign-up-container">
      <h1>Tạo tài khoản</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Họ tên"
            name="username"
            onChange={handleChange('username')}
          />
          {errors.username && touched.username && <span className="error">{errors.username}</span>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange('email')}
          />
          {errors.email && touched.email && <span className="error">{errors.email}</span>}
          <input
            type="tel"
            placeholder="Số điện thoại"
            name="phoneNumber"
            onChange={handleChange('phoneNumber')}
          />
          {errors.phoneNumber && touched.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          <input
            type="password"
            placeholder="Mật khẩu"
            name="password"
            onChange={handleChange('password')}
          />
          {errors.password && touched.password && <span className="error">{errors.password}</span>}
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            name="changepassword"
            onChange={handleChange('changepassword')}
          />
          {errors.changepassword && touched.changepassword && <span className="error">{errors.changepassword}</span>}

          <button type="submit">Đăng ký</button>

          <p className="mobile-text">
            Bạn đã có tài khoản? Vui lòng đăng nhập.
          </p>

        </form>
      </div>
    </div>
  );
}

export default Register;
