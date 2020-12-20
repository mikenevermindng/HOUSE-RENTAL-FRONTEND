import React, { useState, useEffect } from 'react';
import { Input, Select, DatePicker, message } from 'antd';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { getAreaData } from '../../Services/location_services'
import _ from 'lodash'
import moment from 'moment'
import { apiUpdatePoster } from '../../Services/accommodation_poster_services';


const { Option } = Select;
const { RangePicker } = DatePicker;

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
    availableDate: Yup.array().min(2, "Vui lòng cập nhật thời gian đăng bài").of(Yup.string()).required()
});

function MainInfoInput(props) {
    const mainInfo = props.data.props;
    const { ownerId } = props;

    const [cities, setCities] = useState([])
    const [districts, setDistricts] = useState([])
    const [subDistricts, setSubdistricts] = useState([])
    const [recommendedDistricts, setRecommendedDistricts] = useState([])
    const [recommendedSubDistricts, setRecommendedSubDistricts] = useState([])

    const formik = useFormik({
        initialValues: {
            title: mainInfo.title,
            city: mainInfo.city,
            district: mainInfo.district,
            subDistrict: mainInfo.subDistrict,
            address: mainInfo.address,
            typeOfAccommodation: mainInfo.typeOfAccommodation,
            numberOfRoom: mainInfo.numberOfRoom,
            pricePerMonth: mainInfo.pricePerMonth,
            pricePerQuarter: mainInfo.pricePerQuarter ? mainInfo.pricePerQuarter : 0,
            pricePerYear: mainInfo.pricePerYear ? mainInfo.pricePerYear : 0,
            area: mainInfo.area,
            availableDate: mainInfo.availableDate
        },
        onSubmit: async (values) => {
            const data = {
                senderId: ownerId,
                posterChangeInfomation: {
                    ...values
                },
                materialFacilitiesChangeInfomation: {}
            }
            const res = await apiUpdatePoster(mainInfo._id, data)
            if (res) return message.success("Cập nhật thành công")
            else return message.error("Cập nhật thất bại")
        },
        validationSchema: validateSchema,
    })

    const datePickerHandler = (date, dateString) => {
        setFieldValue('availableDate', dateString)
    }

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    const typeOfAccommodations = ['Phòng trọ', 'Chung cư mini', 'Nhà nguyên căn', 'Chung cư nguyên căn'];

    const { values, touched, errors, handleSubmit, handleChange, handleBlur, setFieldValue } = formik;

    const {
        title, city, district,
        subDistrict, address,
        typeOfAccommodation,
        numberOfRoom, pricePerMonth,
        pricePerQuarter, pricePerYear,
        area, availableDate
    } = values;

    useEffect(() => {
        const loadLocationData = async () => {
            const res = await getAreaData();
            if (res) {
                setCities(res.locations.cities)
                setDistricts(res.locations.districts)
                setSubdistricts(res.locations.subDistricts)
            }
        };
        loadLocationData();
    }, []);

    useEffect(() => {
        const districtMap = _.groupBy(districts, 'cityId');
        const trackingCity = cities.find(c => c.city === city)
        if (trackingCity) {
            setFieldValue('district', '')
            setRecommendedDistricts(districtMap[trackingCity.cityId])
        }
    }, [city])

    useEffect(() => {
        const subDistrictMap = _.groupBy(subDistricts, 'districtId');
        const trackingDistrict = districts.find(d => d.district === district)
        if (trackingDistrict) {
            setFieldValue('subDistrict', '')
            setRecommendedSubDistricts(subDistrictMap[trackingDistrict.districtId])
        }
    }, [district])

    return (
        <form onSubmit={handleSubmit}>

            <div className="info-input">
                <p>Tên nhà trọ</p>
                <Input
                    placeholder="Ví dụ: Nhà trọ Thọ An số 3 Tây Hồ"
                    name="title"
                    defaultValue={title}
                    onBlur={handleBlur("title")}
                    onChange={handleChange("title")}
                />
                {errors.title && touched.title && <span>{errors.title}</span>}
            </div>

            <div className="info-input">
                <p>Thể loại nhà ở</p>
                <Select
                    showSearch
                    placeholder="Thể loại"
                    defaultValue={typeOfAccommodation}
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
            </div>

            <div className="info-input">
                <p>Thành phố</p>
                <Select
                    showSearch
                    defaultValue={city}
                    optionFilterProp="children"
                    onBlur={handleBlur("city")}
                    onChange={handleChange("city")}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
                >
                    {cities.map((c, index) => {
                        return (
                            <Option value={c.city} key={'city-' + index} name="city">
                                {c.city}
                            </Option>
                        );
                    })}
                </Select>
                {errors.city && touched.city && <span>{errors.city}</span>}
            </div>

            <div className="info-input">
                <p>Quận/Huyện</p>
                <Select
                    showSearch
                    placeholder="Quận/Huyện"
                    value={district.length === 0 ? null : district}
                    disabled={!city}
                    onBlur={handleBlur("district")}
                    onChange={handleChange("district")}
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
            </div>

            <div className="info-input">
                <p>Phường/Xã</p>
                <Select
                    showSearch
                    placeholder="Phường/Xã"
                    disabled={!district}
                    value={subDistrict.length === 0 ? null : subDistrict}
                    onBlur={handleBlur("subDistrict")}
                    onChange={handleChange("subDistrict")}
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
            </div>

            <div className="info-input">
                <p>Toà nhà/Tên đường</p>
                <Input
                    placeholder="Tòa nhà, Tên đường"
                    name="address"
                    defaultValue={address}
                    onChange={handleChange('address')}
                    onBlur={handleBlur('address')}
                />
                {errors.address && touched.address && <span>{errors.address}</span>}
            </div>

            <div className="info-input">
                <p>Diện tích (m2)</p>
                <Input
                    placeholder="Diện tích (mét vuông)"
                    min="1"
                    defaultValue={area}
                    type="number"
                    onChange={handleChange('area')}
                    onBlur={handleBlur('area')}
                />
                {errors.area && touched.area && <span>{errors.area}</span>}
            </div>

            <div className="info-input">
                <p>Số lượng phòng</p>
                <Input
                    placeholder="Số lượng phòng"
                    min="1"
                    defaultValue={numberOfRoom}
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.numberOfRoom && touched.numberOfRoom && <span>{errors.numberOfRoom}</span>}
            </div>

            <div className="info-input">
                <p>Giá thuê (đồng)</p>
                <label>Tháng</label>
                <Input
                    placeholder="Tháng"
                    min="0"
                    defaultValue={pricePerMonth}
                    type="number"
                    className="price-input"
                    onBlur={handleBlur('pricePerMonth')}
                    onChange={handleChange('pricePerMonth')}
                />
                {errors.pricePerMonth && touched.pricePerMonth && <span>{errors.pricePerMonth}</span>}
                <label>Quý</label>
                <Input
                    placeholder="Quý"
                    min="0"
                    defaultValue={pricePerQuarter}
                    type="number"
                    className="price-input"
                    onBlur={handleBlur('pricePerQuarter')}
                    onChange={handleChange('pricePerQuarter')}
                />
                {errors.pricePerQuarter && touched.pricePerQuarter && <span>{errors.pricePerQuarter}</span>}
                <label>Năm</label>
                <Input
                    placeholder="Năm"
                    min="0"
                    defaultValue={pricePerYear}
                    type="number"
                    className="price-input"
                    onBlur={handleBlur('pricePerYear')}
                    onChange={handleChange('pricePerYear')}
                />
                {errors.pricePerYear && touched.pricePerYear && <span>{errors.pricePerYear}</span>}
            </div>
            <div gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <div span={6}>
                    <div className="input-label">Thời gian hiển thị</div>
                </div>
                <div span={18}>
                    <RangePicker
                        onChange={datePickerHandler}
                        disabledDate={disabledDate}
                        defaultValue={[moment(availableDate[0]), moment(availableDate[1])]}
                    />
                    {errors.availableDate && touched.availableDate && <span>{errors.availableDate}</span>}
                    {values.availableDate.length > 0 && values.availableDate[0] !== '' && <span>{moment(values.availableDate[1]).diff(moment(values.availableDate[0]), 'days')}</span>}
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default MainInfoInput;