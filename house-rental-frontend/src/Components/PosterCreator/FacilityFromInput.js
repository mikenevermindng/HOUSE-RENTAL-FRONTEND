import React, { useState } from 'react';
import { Row, Col, Input, Select, InputNumber } from 'antd';
import { PlusOutlined, CloseSquareFilled } from '@ant-design/icons';
import { FieldArray, Form, Formik } from 'formik'
import * as Yup from 'yup'

const { Option } = Select;

function FacilityFromInput(props) {

	const { setFacilities, next, prev } = props


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

	const backToPrevStep = (e) => {
		e.preventDefault()
		prev()
	}

	return (
		<Formik initialValues={{
			bathroom: '',
			electricWaterHeater: '',
			kitchen: '',
			airConditioner: '',
			balcony: '',
			bed: '',
			fridge: '',
			washingMachine: '',
			wardrobe: '',
			electricityPrice: '',
			domesticWaterPrice: '',
			other: []
		}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				next()
				setFacilities({ ...values })
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
					<Form className="facility-input-form" onSubmit={handleSubmit}>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Phòng tắm</div>
							</Col>
							<Col span={18}>
								<Select
									style={{ width: '100%' }}
									placeholder="Phòng tắm"
									optionFilterProp="children"
									name="bathroom"
									onChange={handleChange('bathroom')}
									onBlur={handleBlur('bathroom')}
								>
									<Option value="khép kín" name="typeOfBathroom">
										Khép kín
									</Option>
									<Option value="chia sẻ" name="typeOfBathroom">
										Dùng chung
									</Option>
								</Select>
								{errors.bathroom && touched.bathroom && <span>{errors.bathroom}</span>}
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Bình nước nóng</div>
							</Col>
							<Col span={18}>
								<Select
									style={{ width: '100%' }}
									placeholder="Bình nước nóng"
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
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Nhà bếp</div>
							</Col>
							<Col span={18}>
								<Select
									style={{ width: '100%' }}
									placeholder="Nhà bếp"
									optionFilterProp="children"
									name="kitchen"
									onBlur={handleBlur('kitchen')}
									onChange={handleChange('kitchen')}
								>
									<Option value="khép kín" name="kitchen">
										Khép kín
									</Option>
									<Option value="chia sẻ" name="kitchen">
										Dùng chung
									</Option>
									<Option value="không" name="kitchen">
										Không
									</Option>
								</Select>
								{errors.kitchen && touched.kitchen && <span>{errors.kitchen}</span>}
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Điều hòa</div>
							</Col>
							<Col span={18}>
								<Select
									style={{ width: '100%' }}
									placeholder="Điều hòa"
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
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Ban công</div>
							</Col>
							<Col span={18}>
								<Select
									style={{ width: '100%' }}
									placeholder="Ban công"
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
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Tủ lạnh</div>
							</Col>
							<Col span={18}>
								<Select
									style={{ width: '100%' }}
									placeholder="Tủ lạnh"
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
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Máy giặt</div>
							</Col>
							<Col span={18}>
								<Select
									style={{ width: '100%' }}
									placeholder="Máy giặt"
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
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Giường</div>
							</Col>
							<Col span={18}>
								<Select
									style={{ width: '100%' }}
									placeholder="Giường"
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
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Tủ</div>
							</Col>
							<Col span={18}>
								<Select
									style={{ width: '100%' }}
									placeholder="Tủ"
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
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Giá điện (đồng)</div>
							</Col>
							<Col span={18}>
								<Input type="number" placeholder="Giá điện" min="1" name="electricityPrice" onBlur={handleBlur('electricityPrice')} onChange={handleChange('electricityPrice')} />
							</Col>
							{errors.electricWaterHeater && touched.electricWaterHeater && <span>{errors.electricWaterHeater}</span>}
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={6}>
								<div className="input-label">Giá nước (đồng)</div>
							</Col>
							<Col span={18}>
								<Input placeholder="Giá nước" min="1" name="domesticWaterPrice" onBlur={handleBlur("domesticWaterPrice")} onChange={handleChange("domesticWaterPrice")} />
								{errors.domesticWaterPrice && touched.domesticWaterPrice && <span>{errors.domesticWaterPrice}</span>}
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={24}>
								<div className="input-label">Tiện ích khác</div>
							</Col>
						</Row>
						<FieldArray
							name="other"
							render={
								arrayHelpers => {
									return (
										<div>
											{
												values.other && values.other.length > 0 ? (
													values.other.map((item, index) => (
														<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={'other-' + index}>
															<Col span={6}>
																<Input
																	placeholder="Tiện ích"
																	type="text"
																	name={`other.${index}.facility`}
																	onChange={handleChange(`other.${index}.facility`)}
																	onBlur={handleBlur(`other.${index}.facility`)}
																/>
															</Col>
															<Col span={16}>
																<Input
																	placeholder="Mô tả"
																	type="text"
																	name={`other.${index}.description`}
																	onChange={handleChange(`other.${index}.description`)}
																	onBlur={handleBlur(`other.${index}.description`)}
																/>
															</Col>

															<Col span={2}>
																<div
																	className="remove-action"
																	onClick={() => arrayHelpers.remove(index)}
																>
																	<CloseSquareFilled />
																</div>
															</Col>
														</Row>
													))
												) : null
											}
											{errors.other && touched.other && <span>Bạn cần nhập đầy đủ thông tin để tới bước tiếp theo</span>}

											<Row>
												<Col span={24}>
													<div id="add" onClick={() => arrayHelpers.push({ facility: '', description: '' })}>
														<PlusOutlined />
													</div>
												</Col>
											</Row>

										</div>
									)
								}
							}
						/>
						<button onClick={backToPrevStep}>back</button>
						<button type="submit">submit</button>
					</Form>
				)
			}}

		/>
	)
}

export default FacilityFromInput;
