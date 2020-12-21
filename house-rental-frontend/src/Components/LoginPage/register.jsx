import React, { useState } from "react";
import "./style.css";
import { apiUserRegister } from "../../Services/user_sevice";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { message } from 'antd'

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Vui lòng nhập họ và tên của bạn"),
  email: Yup.string().email("Địa chỉ email không hợp lệ").required("Vui lòng nhập địa chỉ email"),
  phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại"),
  password: Yup.string().min(8, "Mật khẩu phải dài hơn 8 kí tự").required("Vui lòng nhập mật khẩu")
})

function Register(props) {

  const { switchToLogin } = props

  const [isMatchPassword, setIsMatchPassword] = useState(true)

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phoneNumber: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log(values)
      const res = await apiUserRegister(values)
      if (!res) return message.error("Email của bạn đã từng được dùng để tạo tài khoản ở website này")
      setTimeout(() => {
        switchToLogin()
      }, 1000)
      return message.success("Đăng kí tài khoản thành công, vui lòng đăng nhập")
    },
    validationSchema: validationSchema
  })

  const { values, touched, errors, handleSubmit, handleChange, handleBlur } = formik;

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Tạo tài khoản</h1>
        <input
          type="text"
          placeholder="Họ và tên"
          name="username"
          onChange={handleChange('username')}
          onBlur={handleBlur('username')}
        />
        {errors.username && touched.username && <span className="error">{errors.username}</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        {errors.email && touched.email && <span className="error">{errors.email}</span>}
        <input
          type="tel"
          placeholder="Số điện thoại"
          name="phoneNumber"
          onChange={handleChange('phoneNumber')}
          onBlur={handleBlur('phoneNumber')}
        />
        {errors.phoneNumber && touched.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        <input
          type="password"
          placeholder="Mật khẩu"
          name="password"
          onChange={handleChange('password')}
          onBlur={handleBlur('password')}
        />
        {errors.password && touched.password && <span className="error">{errors.password}</span>}
        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          name="password"
          onBlur={event => {
            setIsMatchPassword(event.target.value === values.password)
          }}
        />
        {!isMatchPassword && <span className="error">Mật khẩu không trùng khớp</span>}
        <button type="submit">Đăng ký</button>

        <p className="text-mobile">
          Bạn đã có tài khoản? Vui lòng đăng nhập.
        </p>
      </form>
    </div>
  );
}

export default Register;
