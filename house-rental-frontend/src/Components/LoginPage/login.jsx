import React, { useState } from "react";
import "./style.css";
import { apiUserLogin } from "../../Services/user_sevice";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { closeLoginPopup } from '../../Store/ActionCreator/showLoginPopupActionCreator'
import { signIn } from '../../Store/ActionCreator/authActionCreator'

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Địa chỉ email không hợp lệ").required("Vui lòng nhập địa chỉ email"),
  password: Yup.string().min(8, "Mật khẩu phải dài hơn 8 kí tự").required("Vui lòng nhập mật khẩu")
})

function Login() {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      const res = await apiUserLogin(values)
      if (!res) return message.error("Đăng nhập thất bại, vui lòng kiểm tra tài khoản hoặc mật khẩu")
      setTimeout(() => {
        dispatch(closeLoginPopup())
      }, 1000)
      dispatch(signIn(res.user))
      localStorage.setItem("token", res.token)
      return message.success("Đăng nhập thành công")
    },
    validationSchema: validationSchema
  })

  const { touched, errors, handleSubmit, handleChange, handleBlur } = formik;

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        {errors.email && touched.email && <span className="error">{errors.email}</span>}
        <input
          type="password"
          placeholder="Mật khẩu"
          name="password"
          onChange={handleChange('password')}
          onBlur={handleBlur('password')}
        />
        {errors.password && touched.password && <span className="error">{errors.password}</span>}
        <button type="submit">Đăng nhập</button>

        <p className="text-mobile">
          Bạn chưa có tài khoản? Vui lòng đăng ký.
        </p>

      </form>
    </div>
  );
}

export default Login;
