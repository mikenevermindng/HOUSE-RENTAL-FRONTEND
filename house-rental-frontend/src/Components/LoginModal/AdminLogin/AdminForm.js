import React from "react";
import "../style.css";
import { apiAdminLogin } from "../../../Services/admin_services";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'

const validationSchema = Yup.object().shape({
    account: Yup.string().required("Vui lòng nhập tài khoản"),
    password: Yup.string().required("Vui lòng nhập mật khẩu")
})

function Login() {

    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            account: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const login = await apiAdminLogin(values)
            console.log(login)
            if (login) {
                localStorage.setItem('adminToken', login.token)
                message.success("Đăng nhập thành công")
                history.go(0)
            } else {
                message.error("Tài khoản hoặc mật khẩu không đúng")
            }
        }
    })

    const { touched, errors, handleSubmit, handleChange } = formik;

    console.log(errors)

    return (
        <div className="form-container sign-in-container">
            <h1>Đăng nhập</h1>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Tài khoản"
                        name="account"
                        onChange={handleChange('account')}
                    />
                    {errors.account && touched.account && <span className="error">{errors.account}</span>}
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        onChange={handleChange('password')}
                    />
                    {errors.password && touched.password && <span className="error">{errors.password}</span>}
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
}

export default Login;