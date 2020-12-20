import React from 'react';
import { Input, message } from 'antd';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { apiUpdatePoster } from '../../Services/accommodation_poster_services';

const { TextArea } = Input;

const validateSchema = Yup.object().shape({
    description: Yup.string()
        .min(500, "Bài đăng nên được mô tả tối thiểu 500 kí tự")
        .max(3000, "Bài đăng không nên được môt tả bởi quá 3000 kí tự")
        .required("Bài đăng nên được mô tả tối thiểu 500 kí tự")
})

function Description(props) {
    const desc = props.data.props;
    const { ownerId, posterId } = props

    const formik = useFormik({
        initialValues: {
            description: desc.description,
        },
        validationSchema: validateSchema,
        onSubmit: async (values) => {
            const data = {
                senderId: ownerId,
                posterChangeInfomation: {
                    ...values
                },
                materialFacilitiesChangeInfomation: {}
            }
            const res = await apiUpdatePoster(posterId, data)
            if (res) return message.success("Cập nhật thành công")
            else return message.error("Cập nhật thất bại")
        },
    })

    const {
        values,
        touched,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
    } = formik;

    return (
        <form className="info-box" onSubmit={handleSubmit}>
            <div className="info-input">
                <p>Mô tả về nơi ở của bạn</p>
                <TextArea
                    rows={20}
                    maxLength={3000}
                    defaultValue={values.description}
                    name="description"
                    onChange={handleChange('description')}
                    onBlur={handleBlur('description')} />
            </div>
            <p>{errors.description && touched.description && <span>{errors.description}</span>}</p>
            <button type="submit">submit</button>
        </form>
    )
}

export default Description;