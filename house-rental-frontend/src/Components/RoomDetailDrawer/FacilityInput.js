import React from 'react';
import { Input, Select, message } from 'antd';
import { PlusOutlined, CloseSquareFilled } from '@ant-design/icons';
import { FieldArray, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { apiUpdatePoster } from '../../Services/accommodation_poster_services';

const { Option } = Select;

const validationSchema = Yup.object().shape({
    bathroom: Yup.string().required("Bắt buộc"),
    electricWaterHeater: Yup.bool().required("Bắt buộc"),
    kitchen: Yup.string().required("Bắt buộc"),
    airConditioner: Yup.bool().required("Bắt buộc"),
    balcony: Yup.bool().required("Bắt buộc"),
    bed: Yup.bool().required("Bắt buộc"),
    fridge: Yup.bool().required("Bắt buộc"),
    washingMachine: Yup.bool().required("Bắt buộc"),
    wardrobe: Yup.bool().required("Bắt buộc"),
    electricityPrice: Yup.number("Vui lòng chỉ nhập chữ số").required("Bắt buộc"),
    domesticWaterPrice: Yup.number("Vui lòng chỉ nhập chữ số").required("Bắt buộc"),
    other: Yup.array().of(
        Yup.object().shape({
            facility: Yup.string().required("Bắt buộc"),
            description: Yup.string().required("Bắt buộc")
        })
    )
})

function FacilityInput(props) {
    const facility = props.data.props.materialFacilities;

    const { ownerId, posterId } = props

    console.log(ownerId, posterId)

    const typeOfBathroom = [{ type: 'close', label: 'Khép kín' }, { type: 'share', label: 'Dùng chung' }];

    return (
        <Formik initialValues={{
            bathroom: facility.bathroom,
            electricWaterHeater: facility.electricWaterHeater,
            kitchen: facility.kitchen,
            airConditioner: facility.airConditioner,
            balcony: facility.balcony,
            bed: facility.bed,
            fridge: facility.fridge,
            washingMachine: facility.washingMachine,
            wardrobe: facility.wardrobe,
            electricityPrice: facility.electricityPrice,
            domesticWaterPrice: facility.domesticWaterPrice,
            other: facility.other
        }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                const data = {
                    senderId: ownerId,
                    materialFacilitiesChangeInfomation: {
                        ...values
                    },
                    posterChangeInfomation: {},
                }
                const res = await apiUpdatePoster(posterId, data)
                if (res) return message.success("Cập nhật thành công")
                else return message.error("Cập nhật thất bại")
            }}
            render={({
                values,
                touched,
                errors,
                handleSubmit,
                handleChange,
                handleBlur,
            }) => {
                return (
                    <Form className="info-box" >
                        <div className="info-input">
                            <p>Phòng tắm</p>
                            <Select
                                placeholder="Phòng tắm"
                                defaultValue={values.bathroom}
                                optionFilterProp="children"
                                name="bathroom"
                                onChange={handleChange('bathroom')}
                                onBlur={handleBlur('bathroom')}
                            >
                                {typeOfBathroom.map((type, index) => {
                                    return (
                                        <Option value={type.label} key={'typeOfBathroom-' + index} name="typeOfBathroom">
                                            {type.label}
                                        </Option>
                                    );
                                })}
                            </Select>
                            {errors.bathroom && touched.bathroom && <span>{errors.bathroom}</span>}
                        </div>

                        <div className="info-input">
                            <p>Bình nước nóng</p>
                            <Select
                                placeholder="Bình nước nóng"
                                defaultValue={values.electricWaterHeater ? "Có" : "Không"}
                                optionFilterProp="children"
                                name="electricWaterHeater"
                                onBlur={handleBlur('electricWaterHeater')}
                                onChange={handleChange('electricWaterHeater')}
                            >
                                <Option value="true" name="electricWaterHeater">
                                    Có
                                </Option>
                                <Option value="false" name="electricWaterHeater">
                                    Không
                                </Option>
                            </Select>
                            {errors.electricWaterHeater && touched.electricWaterHeater && <span>{errors.electricWaterHeater}</span>}
                        </div>

                        <div className="info-input">
                            <p>Nhà bếp</p>
                            <Select
                                placeholder="Nhà bếp"
                                defaultValue={values.kitchen}
                                optionFilterProp="children"
                                name="kitchen"
                                onBlur={handleBlur('kitchen')}
                                onChange={handleChange('kitchen')}
                            >
                                <Option value="closed" name="kitchen">
                                    Khép kín
                                </Option>
                                <Option value="shared" name="kitchen">
                                    Dùng chung
                                </Option>
                                <Option value="none" name="kitchen">
                                    Không
                                </Option>
                            </Select>
                            {errors.kitchen && touched.kitchen && <span>{errors.kitchen}</span>}
                        </div>

                        <div className="info-input" >
                            <p>Điều hoà</p>
                            <Select
                                placeholder="Điều hoà"
                                defaultValue={values.airConditioner ? "Có" : "Không"}
                                optionFilterProp="children"
                                name="airConditioner"
                                onBlur={handleBlur('airConditioner')}
                                onChange={handleChange('airConditioner')}
                            >
                                <Option value="true" name="airConditioner">
                                    Có
                                </Option>
                                <Option value="false" name="airConditioner">
                                    Không
                                </Option>
                            </Select>
                            {errors.kitchen && touched.kitchen && <span>{errors.kitchen}</span>}
                        </div>

                        <div className="info-input">
                            <p>Ban công</p>
                            <Select
                                placeholder="Ban công"
                                defaultValue={values.balcony ? "Có" : "Không"}
                                optionFilterProp="children"
                                name="balcony"
                                onBlur={handleBlur('balcony')}
                                onChange={handleChange('balcony')}
                            >
                                <Option value="true" name="balcony">
                                    Có
                                </Option>
                                <Option value="false" name="balcony">
                                    Không
                                </Option>
                            </Select>
                            {errors.balcony && touched.balcony && <span>{errors.balcony}</span>}
                        </div>

                        <div className="info-input">
                            <p>Tủ lạnh</p>
                            <Select
                                placeholder="Tủ lạnh"
                                defaultValue={values.fridge ? "Có" : "Không"}
                                optionFilterProp="children"
                                name="fridge"
                                onBlur={handleBlur("fridge")}
                                onChange={handleChange("fridge")}
                            >
                                <Option value="true" name="fridge">
                                    Có
                                </Option>
                                <Option value="false" name="fridge">
                                    Không
                                </Option>
                            </Select>
                            {errors.fridge && touched.fridge && <span>{errors.fridge}</span>}
                        </div>

                        <div className="info-input">
                            <p>Máy giặt</p>
                            <Select
                                placeholder="Máy giặt"
                                defaultValue={values.washingMachine ? "Có" : "Không"}
                                optionFilterProp="children"
                                name="washingMachine"
                                onBlur={handleBlur("washingMachine")}
                                onChange={handleChange("washingMachine")}
                            >
                                <Option value="true" name="washingMachine">
                                    Có
                                </Option>
                                <Option value="false" name="washingMachine">
                                    Không
                                </Option>
                            </Select>
                            {errors.washingMachine && touched.washingMachine && <span>{errors.washingMachine}</span>}
                        </div>

                        <div className="info-input">
                            <p>Giường</p>
                            <Select
                                placeholder="Giường"
                                defaultValue={values.bed ? "Có" : "Không"}
                                optionFilterProp="children"
                                name="bed"
                                onBlur={handleBlur('bed')}
                                onChange={handleChange('bed')}
                            >
                                <Option value="true" name="bed">
                                    Có
                                </Option>
                                <Option value="false" name="bed">
                                    Không
                                </Option>
                            </Select>
                            {errors.bed && touched.bed && <span>{errors.bed}</span>}
                        </div>

                        <div className="info-input">
                            <p>Tủ</p>
                            <Select
                                placeholder="Tủ"
                                defaultValue={values.wardrobe ? "Có" : "Không"}
                                optionFilterProp="children"
                                name="wardrobe"
                                onBlur={handleBlur('wardrobe')}
                                onChange={handleChange('wardrobe')}
                            >
                                <Option value="true" name="wardrobe">
                                    Có
                                </Option>
                                <Option value="false" name="wardrobe">
                                    Không
                                </Option>
                            </Select>
                            {errors.wardrobe && touched.wardrobe && <span>{errors.wardrobe}</span>}
                        </div>

                        <div className="info-input">
                            <p>Giá điện (đồng/kWh)</p>
                            <Input
                                placeholder="Giá điện"
                                min="1"
                                type="number"
                                value={values.electricityPrice}
                                name="electricityPrice"
                                onBlur={handleBlur('electricityPrice')}
                                onChange={handleChange('electricityPrice')}
                            />
                        </div>

                        <div className="info-input">
                            <p>Giá nước (đồng/m3)</p>
                            <Input
                                placeholder="Giá nước"
                                min="1"
                                type="number"
                                value={values.domesticWaterPrice}
                                name="domesticWaterPrice"
                                onBlur={handleBlur("domesticWaterPrice")}
                                onChange={handleChange("domesticWaterPrice")}
                            />
                        </div>

                        <FieldArray
                            name="other"
                            render={
                                arrayHelpers => {
                                    return (
                                        <div>
                                            {
                                                values.other && values.other.length > 0 ? (
                                                    values.other.map((item, index) => (
                                                        <div gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={'other-' + index}>
                                                            <div span={6}>
                                                                <Input
                                                                    placeholder="Tiện ích"
                                                                    type="text"
                                                                    name={`other.${index}.facility`}
                                                                    onChange={handleChange(`other.${index}.facility`)}
                                                                    onBlur={handleBlur(`other.${index}.facility`)}
                                                                />
                                                            </div>
                                                            <div span={16}>
                                                                <Input
                                                                    placeholder="Mô tả"
                                                                    type="text"
                                                                    name={`other.${index}.description`}
                                                                    onChange={handleChange(`other.${index}.description`)}
                                                                    onBlur={handleBlur(`other.${index}.description`)}
                                                                />
                                                            </div>

                                                            <div span={2}>
                                                                <div
                                                                    className="remove-action"
                                                                    onClick={() => arrayHelpers.remove(index)}
                                                                >
                                                                    <CloseSquareFilled />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : null
                                            }
                                            {errors.other && touched.other && <span>Bạn cần nhập đầy đủ thông tin để tới bước tiếp theo</span>}

                                            <div>
                                                <div span={24}>
                                                    <div id="add" onClick={() => arrayHelpers.push({ facility: '', description: '' })}>
                                                        <PlusOutlined />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            }
                        />
                        <button className="submitButton" type="submit">Lưu</button>
                    </Form>
                )
            }}
        />

    )
}

export default FacilityInput;