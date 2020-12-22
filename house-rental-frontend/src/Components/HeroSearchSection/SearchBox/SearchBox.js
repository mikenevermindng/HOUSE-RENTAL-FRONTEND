import React, { useEffect, useState } from 'react';
import './SearchBox.css';
import { Select } from 'antd';
import { Link } from 'react-router-dom'
import { getAreaData } from '../../../Services/location_services'
import _ from 'lodash'
import queryString from 'querystring'

const { Option } = Select;

function SearchBox({ locations }) {
    const typeOfAccommodations = ['Phòng trọ', 'Chung cư mini', 'Nhà nguyên căn', 'Chung cư nguyên căn'];
    const typeOfArea = ['0 20', '20 50', '50 100', '100 0'];
    const typeOfPrice = ["0 3000000", "30000000 5000000", "5000000 10000000", "10000000 0"];

    const [cities, setCities] = useState([])
    const [districts, setDistrics] = useState([])
    const [subDistricts, setSubdistricts] = useState([])
    const [recommendedDistricts, setRecommendedDistricts] = useState([])
    const [recommendedSubDistricts, setRecommendedSubDistricts] = useState([])

    const [city, setCity] = useState(null)
    const [district, setDistrict] = useState(null)
    const [subDistrict, setSubdistrict] = useState(null)

    const [selections, setSelections] = useState({})

    const moneyString = (price) => {
        const priceList = price.split(' ')
        const min = priceList[0]
        const max = priceList[1]
        if (min > 0 && max > 0) {
            return 'Từ ' + min + ' tới ' + max + ' đồng'
        } else if (min > 0) {
            return 'Trên ' + min + ' đồng'
        }
        return 'Dưới ' + max + ' đồng'
    }

    const areaString = (area) => {
        const areaList = area.split(' ')
        const min = areaList[0]
        const max = areaList[1]
        if (min > 0 && max > 0) {
            return 'Từ ' + min + ' tới ' + max + ' mét vuông'
        } else if (min > 0) {
            return 'Trên ' + min + ' mét vuông'
        }
        return 'Dưới ' + max + ' mét vuông'
    }

    const getAreaFilterOption = (area) => {
        const areaList = area.split(' ')
        const min = areaList[0]
        const max = areaList[1]
        if (min > 0 && max > 0) {
            return { minArea: min, maxArea: max }
        } else if (min > 0) {
            return { minArea: min }
        }
        return { maxArea: max }
    }

    const getPriceFilterOption = (area) => {
        const areaList = area.split(' ')
        const min = areaList[0]
        const max = areaList[1]
        if (min > 0 && max > 0) {
            return { minPrice: min, maxPrice: max }
        } else if (min > 0) {
            return { minPrice: min }
        }
        return { maxPrice: max }
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
            setDistrict(null)
            setRecommendedDistricts(districtMap[trackingCity.cityId])
        }
    }, [city])

    useEffect(() => {
        if (district) {
            const subDistrictMap = _.groupBy(subDistricts, 'districtId');
            const trackingDistrict = districts.find(d => d.district === district)
            setSubdistrict(null)
            setRecommendedSubDistricts(subDistrictMap[trackingDistrict.districtId])
        }
    }, [district])

    const locationFilterOption = () => {
        const obj = {}
        if (city) obj.city = city
        if (district) obj.district = district
        if (subDistrict) obj.subDistrict = subDistrict
        return obj
    }

    return (
        <div className="search-box">
            <div className="search-input-container">
                <div className="info-input">
                    <p>Thành phố</p>
                    <Select
                        style={{ width: '100%' }}
                        name="city"
                        value={city ? city : null}
                        onSelect={(option) => setCity(option)}
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
                </div>

                <div className="info-input">
                    <p>Quận/Huyện</p>
                    <Select
                        style={{ width: '100%' }}
                        value={district ? district : null}
                        name="district"
                        onSelect={(option) => setDistrict(option)}
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
                </div>

                <div className="info-input">
                    <p>Phường/Xã</p>
                    <Select
                        style={{ width: '100%' }}
                        showSearch
                        disabled={!district}
                        value={subDistrict ? subDistrict : null}
                        name="subDistrict"
                        onSelect={(option) => setSubdistrict(option)}
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
                </div>

                <div className="info-input">
                    <p>Kiểu nhà</p>
                    <Select
                        onSelect={(option) => setSelections({ ...selections, typeOfAccommodation: option })}
                    >
                        {typeOfAccommodations.map((type, index) => {
                            return (
                                <Option value={type.toLowerCase()} key={'typeOfAccommodation-' + index} name="typeOfAccommodation">
                                    {type}
                                </Option>
                            );
                        })}
                    </Select>
                </div>

                <div className="info-input">
                    <p>Diện tích</p>
                    <Select
                        onSelect={(option) => setSelections({ ...selections, ...getAreaFilterOption(option) })}
                    >
                        {typeOfArea.map((type, index) => {
                            return (
                                <Option value={type.toLowerCase()} key={'typeOfArea-' + index} name="typeOfArea">
                                    {areaString(type)}
                                </Option>
                            );
                        })}
                    </Select>
                </div>

                <div className="info-input">
                    <p>Giá tiền</p>
                    <Select
                        onSelect={(option) => setSelections({ ...selections, ...getPriceFilterOption(option) })}
                    >
                        {typeOfPrice.map((price, index) => {
                            return (
                                <Option value={price} key={'typeOfPrice-' + index} name="typeOfPrice">
                                    {moneyString(price)}
                                </Option>
                            );
                        })}
                    </Select>
                </div>
            </div>
            <div className="search-button">
                <Link to={"/rooms?" + queryString.stringify({ ...selections, ...locationFilterOption() })} ><button id="search-button">Tìm kiếm</button></Link>
            </div>
        </div>
    )
}

export default SearchBox;