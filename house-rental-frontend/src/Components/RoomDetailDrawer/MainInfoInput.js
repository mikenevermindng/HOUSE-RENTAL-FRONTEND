import React from 'react';
import { Input, Select, InputNumber } from 'antd';

const { Option } = Select;

function MainInfoInput(props) {
    const mainInfo = props.data.props;
    console.log(mainInfo);

    const typeOfAccommodation = [ 'Phòng trọ', 'Chung cư mini', 'Nhà nguyên căn', 'Chung cư nguyên căn' ];

    return (
        <div className="info-box">
            <div className="info-input">
                <p>Tên nhà trọ</p>
                <Input placeholder="Ví dụ: Nhà trọ Thọ An số 3 Tây Hồ" name="title" defaultValue={mainInfo.title} />
            </div>

            <div className="info-input">
                <p>Thể loại nhà ở</p>
                <Select
                    showSearch
                    placeholder="Thể loại"
                    defaultValue={mainInfo.typeOfAccommodation}
                >
                    {typeOfAccommodation.map((type, index) => {
                        return (
                            <Option value={type} key={'typeOfAccommodation-' + index} name="typeOfAccommodation">
                                {type}
                            </Option>
                        );
                    })}
                </Select>
            </div>

            <div className="info-input">
                <p>Thành phố</p>
                <Select
                    showSearch
                    placeholder="Thành phố"
                    defaultValue={mainInfo.city}
                >
                    {typeOfAccommodation.map((type, index) => {
                        return (
                            <Option value={type} key={'city' + index} name="city">
                                {type}
                            </Option>
                        );
                    })}
                </Select>
            </div>

            <div className="info-input">
                <p>Quận/Huyện</p>
                <Select
                    showSearch
                    placeholder="Quận/Huyện"
                    defaultValue={mainInfo.district}
                >
                    {typeOfAccommodation.map((type, index) => {
                        return (
                            <Option value={type} key={'district-' + index} name="district">
                                {type}
                            </Option>
                        );
                    })}
                </Select>
            </div>

            <div className="info-input">
                <p>Phường/Xã</p>
                <Select
                    showSearch
                    placeholder="Phường/Xã"
                    defaultValue={mainInfo.subDistrict}
                >
                    {typeOfAccommodation.map((type, index) => {
                        return (
                            <Option value={type} key={'subDistrict-' + index} name="subDistrict">
                                {type}
                            </Option>
                        );
                    })}
                </Select>
            </div>

            <div className="info-input">
                <p>Toà nhà/Tên đường</p>
                <Input placeholder="Tòa nhà, Tên đường" name="address" defaultValue={mainInfo.address}/>
            </div>

            <div className="info-input">
                <p>Diện tích (m2)</p>
                <InputNumber placeholder="Diện tích (mét vuông)" min="1" defaultValue={mainInfo.area}/>
            </div>

            <div className="info-input">
                <p>Số lượng phòng</p>
                <InputNumber placeholder="Số lượng phòng" min="1" defaultValue={mainInfo.numberOfRoom}/>
            </div>

            <div className="info-input">
                <p>Giá thuê (đồng)</p>
                <InputNumber placeholder="Tháng" min="1" defaultValue={mainInfo.pricePerMonth}/>
                <InputNumber placeholder="Quý" min="1" defaultValue={mainInfo.pricePerQuarter}/>
                <InputNumber placeholder="Năm" min="1" defaultValue={mainInfo.pricePerYear}/>
            </div>
        </div>
    )
}

export default MainInfoInput;