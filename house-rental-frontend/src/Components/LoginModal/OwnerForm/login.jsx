import React from "react";
import "../style.css";
import { apiOwnerLogin } from "../../../Services/owner_services";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { message } from 'antd'
import { useHistory } from 'react-router'

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Không nhận dạng được email").required("Vui lòng nhập địa chỉ email"),
    password: Yup.string().min(8, "Mật khẩu phải nhiều hơn 8 kí tự").required("Vui lòng nhập địa chỉ email")
})

function Login() {

    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const login = await apiOwnerLogin(values)
            if (login) {
                console.log(login.token)
                sessionStorage.setItem('ownerToken', login.token)
                history.go(0)
                message.success("Đăng nhập thành công")
            } else {
                message.error("Đăng nhập thất bại")
                message.warning("Tài khoản có thể chưa được Admin phê duyệt")
            }
        }
    })

    const { touched, errors, handleSubmit, handleChange } = formik;

    return (
        <div className="form-container sign-in-container">
            <h1>Đăng nhập</h1>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange('email')}
                    />
                    {errors.email && touched.email && <span className="error">{errors.email}</span>}
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        onChange={handleChange('password')}
                    />
                    {errors.password && touched.password && <span className="error">{errors.password}</span>}
                    <button type="submit">Đăng nhập</button>

                    <p className="mobile-text">
                        Bạn chưa có tài khoản? Vui lòng đăng ký.
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Login;
