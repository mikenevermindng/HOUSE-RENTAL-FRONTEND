import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Select, DatePicker } from 'antd';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import _ from 'lodash'
import { getAreaData } from '../../Services/location_services'
import moment from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;

function PosterFromInput(props) {
	const typeOfAccommodations = ['Phòng trọ', 'Chung cư mini', 'Nhà nguyên căn', 'Chung cư nguyên căn'];

	const [cities, setCities] = useState([])
	const [districts, setDistrics] = useState([])
	const [subDistricts, setSubdistricts] = useState([])
	const [recommendedDistricts, setRecommendedDistricts] = useState([])
	const [recommendedSubDistricts, setRecommendedSubDistricts] = useState([])

	const {
		setPosterInfo,
		posterInfo,
		next
	} = props;

	const validateSchema = Yup.object().shape({
		title: Yup.string().min(10, "Chủ đề của bài đăng nên có nhiều hơn 10 kí tự").required("Bắt buộc"),
		city: Yup.string().required("Bắt buộc"),
		district: Yup.string().required("Bắt buộc"),
		subDistrict: Yup.string().required("Bắt buộc"),
		address: Yup.string().required("Bắt buộc"),
		typeOfAccommodation: Yup.string().required("Bắt buộc"),
		numberOfRoom: Yup.number("Xin vui lòng chỉ nhập chữ số").required("Bắt buộc"),
		area: Yup.number("Xin vui lòng chỉ nhập chữ số").required("Bắt buộc"),
		pricePerMonth: Yup.number("Xin vui lòng chỉ nhập chữ số").required("Bắt buộc"),
		pricePerQuarter: Yup.number("Xin vui lòng chỉ nhập chữ số"),
		pricePerYear: Yup.number("Xin vui lòng chỉ nhập chữ số"),
		availableDate: Yup.array().min(2, "Xin vui lòng nhập ngày đăng bài").of(Yup.string()).required()
	});

	const datePickerHandler = (date, dateString) => {
		setFieldValue('availableDate', dateString)
	}

	const formik = useFormik({
		initialValues: {
			title: "",
			city: "",
			district: "",
			subDistrict: "",
			address: "",
			typeOfAccommodation: "",
			numberOfRoom: "",
			pricePerMonth: "",
			pricePerQuarter: "",
			pricePerYear: "",
			area: "",
			availableDate: []
		},
		onSubmit: (values) => {
			setPosterInfo({ ...posterInfo, ...values })
			next()
		},
		validationSchema: validateSchema,
	})

	const { values, touched, errors, handleSubmit, handleChange, handleBlur, setFieldValue } = formik;
	const {
		title, city, district,
		subDistrict, address,
		typeOfAccommodation,
		numberOfRoom, pricePerMonth,
		pricePerQuarter, pricePerYear,
		area,
	} = values;

	function disabledDate(current) {
		// Can not select days before today and today
		return current && current < moment().endOf('day');
	}

	useEffect(() => {
		const loadLocationData = async () => {
			const res = await getAreaData();
			setCities(res.locations.cities)
			setDistrics(res.locations.districts)
			setSubdistricts(res.locations.subDistricts)
		};
		loadLocationData();
	}, []);

	useEffect(() => {
		if (city) {
			const districtMap = _.groupBy(districts, 'cityId');
			const trackingCity = cities.find(c => c.city === city)
			setFieldValue('district', '')
			setRecommendedDistricts(districtMap[trackingCity.cityId])
		}
	}, [city])

	useEffect(() => {
		if (district) {
			const subDistrictMap = _.groupBy(subDistricts, 'districtId');
			const trackingDistrict = districts.find(d => d.district === district)
			setFieldValue('subDistrict', '')
			setRecommendedSubDistricts(subDistrictMap[trackingDistrict.districtId])
		}
	}, [district])

	return (
		<form onSubmit={handleSubmit}>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Tên nhà trọ</div>
				</Col>
				<Col span={18}>
					<Input
						placeholder="Ví dụ: Nhà trọ Thọ An số 3 Tây Hồ"
						name="title"
						value={title}
						onBlur={handleBlur("title")}
						onChange={handleChange("title")} />
					{errors.title && touched.title && <span>{errors.title}</span>}
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Thể loại</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						name="typeOfAccommodation"
						showSearch
						value={typeOfAccommodation.length === 0 ? null : typeOfAccommodation}
						placeholder="Thể loại"
						optionFilterProp="children"
						onBlur={handleBlur("typeOfAccommodation")}
						onChange={handleChange("typeOfAccommodation")}
					>
						{typeOfAccommodations.map((type, index) => {
							return (
								<Option value={type.toLowerCase()} key={'typeOfAccommodation-' + index} name="typeOfAccommodation">
									{type}
								</Option>
							);
						})}
					</Select>
					{errors.typeOfAccommodation && touched.typeOfAccommodation && <span>{errors.typeOfAccommodation}</span>}
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Thành phố</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						name="city"
						value={city.length === 0 ? null : city}
						onBlur={handleBlur("city")}
						onChange={handleChange("city")}
						showSearch
						placeholder="Thành phố"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						filterSort={(optionA, optionB) =>
							optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
					>
						{cities.map((c, index) => {
							return (
								<Option value={c.city} key={'city' + index} name="city">
									{c.city}
								</Option>
							);
						})}
					</Select>
					{errors.city && touched.city && <span>{errors.city}</span>}
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Quận/Huyện</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						value={district.length === 0 ? null : district}
						name="district"
						onBlur={handleBlur("district")}
						onChange={handleChange("district")}
						showSearch
						disabled={!city}
						placeholder="Quận/Huyện"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						filterSort={(optionA, optionB) =>
							optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
					>
						{recommendedDistricts.map((d, index) => {
							return (
								<Option value={d.district} key={'district-' + index} name="district">
									{d.district}
								</Option>
							);
						})}
					</Select>
					{errors.district && touched.district && <span>{errors.district}</span>}
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Phường/Xã</div>
				</Col>
				<Col span={18}>
					<Select
						style={{ width: '100%' }}
						showSearch
						disabled={!district}
						value={subDistrict.length === 0 ? null : subDistrict}
						name="subDistrict"
						onBlur={handleBlur("subDistrict")}
						onChange={handleChange("subDistrict")}
						placeholder="Phường/Xã"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						filterSort={(optionA, optionB) =>
							optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
					>
						{recommendedSubDistricts.map((sd, index) => {
							return (
								<Option value={sd.subDistrict} key={'subDistrict-' + index} name="subDistrict">
									{sd.subDistrict}
								</Option>
							);
						})}
					</Select>
					{errors.subDistrict && touched.subDistrict && <span>{errors.subDistrict}</span>}
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Tòa nhà, Tên đường</div>
				</Col>
				<Col span={18}>
					<Input
						placeholder="Tòa nhà, Tên đường"
						value={address}
						onChange={handleChange('address')}
						onBlur={handleBlur('address')}
						name="address" />
					{errors.address && touched.address && <span>{errors.address}</span>}
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Diện tích (m2)</div>
				</Col>
				<Col span={18}>
					<Input
						type="number"
						min="3"
						placeholder="Diện tích (mét vuông)"
						name="area"
						value={area}
						onChange={handleChange('area')}
						onBlur={handleBlur('area')} />
				</Col>
				{errors.area && touched.area && <span>{errors.area}</span>}
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Số lượng phòng</div>
				</Col>
				<Col span={18}>
					<Input
						placeholder="Số lượng phòng"
						type="number"
						min="1"
						name="numberOfRoom"
						value={numberOfRoom}
						onChange={handleChange}
						onBlur={handleBlur} />
				</Col>
				{errors.numberOfRoom && touched.numberOfRoom && <span>{errors.numberOfRoom}</span>}
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Giá thuê (đồng)</div>
				</Col>
				<Col span={6}>
					<Input
						placeholder="Tháng"
						type="number"
						min="1"
						name="pricePerMonth"
						value={pricePerMonth}
						onBlur={handleBlur('pricePerMonth')}
						onChange={handleChange('pricePerMonth')}
					/>
					{errors.pricePerMonth && touched.pricePerMonth && <span>{errors.pricePerMonth}</span>}
				</Col>
				<Col span={6}>
					<Input
						placeholder="Quý"
						type="number"
						min="1"
						name="pricePerQuarter"
						value={pricePerQuarter}
						onBlur={handleBlur('pricePerQuarter')}
						onChange={handleChange('pricePerQuarter')} />
					{errors.pricePerQuarter && touched.pricePerQuarter && <span>{errors.pricePerQuarter}</span>}
				</Col>
				<Col span={6}>
					<Input placeholder="Năm"
						type="number"
						min="1"
						name="pricePerYear"
						value={pricePerYear}
						onBlur={handleBlur('pricePerYear')}
						onChange={handleChange('pricePerYear')} />
					{errors.pricePerYear && touched.pricePerYear && <span>{errors.pricePerYear}</span>}
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col span={6}>
					<div className="input-label">Thời gian hiển thị</div>
				</Col>
				<Col span={18}>
					<RangePicker
						locale={locale}
						onChange={datePickerHandler}
						disabledDate={disabledDate}
					/>
					{errors.availableDate && touched.availableDate && <span>{errors.availableDate}</span>}
					{values.availableDate.length > 0 && values.availableDate[0] !== '' && <span>{moment(values.availableDate[1]).diff(moment(values.availableDate[0]), 'days')}</span>}
				</Col>
			</Row>
			<button type="submit">submit</button>
		</form>
	);
}

export default PosterFromInput;
