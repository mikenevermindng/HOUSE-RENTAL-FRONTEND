import React, { useState } from "react";
import { apiOwnerRegister } from "../../../Services/owner_services";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { message } from 'antd'
import '../style.css';

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
    firstName: Yup.string().min(3, "Tên người dùng tối thiểu 3 kí tự").required("Vui lòng nhập họ và tên"),
    lastName: Yup.string().min(3, "Tên người dùng tối thiểu 3 kí tự").required("Vui lòng nhập họ và tên"),
    phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại"),
    citizenId: Yup.number().min(100000000, "Số thẻ căn cước tối thiểu 9 kí tự").required("Vui lòng nhập họ và tên"),
    city: Yup.string().required("Vui lòng nhập thành phố"),
    address: Yup.string().required("Vui lòng nhập địa chỉ")
})

function Register() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            changepassword: '',
            citizenId: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const register = await apiOwnerRegister(values)
            if (register) {
                message.success("Đăng kí thành công, hãy chờ Admin phê duyệt tài khoản")
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
                        name="firstName"
                        placeholder="Tên"
                        onChange={handleChange('firstName')}
                    />
                    {errors.firstName && touched.firstName && <span className="error">{errors.firstName}</span>}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Họ"
                        onChange={handleChange('lastName')}
                    />
                    {errors.lastName && touched.lastName && <span className="error">{errors.lastName}</span>}
                    <input
                        type="text"
                        name="citizenId"
                        placeholder="Số CMND"
                        onChange={handleChange('citizenId')}
                    />
                    {errors.citizenId && touched.citizenId && <span className="error">{errors.citizenId}</span>}
                    <input
                        type="text"
                        name="city"
                        placeholder="Thành phố"
                        onChange={handleChange('city')}
                    />
                    {errors.city && touched.city && <span className="error">{errors.city}</span>}
                    <input
                        type="text"
                        name="address"
                        placeholder="Địa chỉ"
                        onChange={handleChange('address')}
                    />
                    {errors.address && touched.address && <span className="error">{errors.address}</span>}
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Số điện thoại"
                        onChange={handleChange('phoneNumber')}
                    />
                    {errors.phoneNumber && touched.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange('email')}
                    />
                    {errors.email && touched.email && <span className="error">{errors.email}</span>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        onChange={handleChange('password')}
                    />
                    {errors.password && touched.city && <span className="error">{errors.city}</span>}
                    <input
                        type="password"
                        name="changepassword"
                        placeholder="Nhập lại mật khẩu"
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
