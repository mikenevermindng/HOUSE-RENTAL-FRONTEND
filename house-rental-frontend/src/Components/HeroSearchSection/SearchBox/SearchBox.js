import React from 'react';
import './SearchBox.css';
import {Select} from 'antd';

const {Option} = Select;

function SearchBox() {
    const typeOfAccommodations = ['Phòng trọ', 'Chung cư mini', 'Nhà nguyên căn', 'Chung cư nguyên căn'];
    const typeOfArea = ['dưới 20m²', '20 - 50m²', '50 - 100m²', 'trên 100m²'];
    const typeOfPrice = ['dưới 3.000.000 đồng', '3.000.0000 - 5.000.000 đồng', '5.000.000 - 10.000.000 đồng', 'trên 10.000.000 đồng'];

    return (
        <div className="search-box">
            <div className="search-input-container">
                <div className="info-input">
                    <p>Thành phố</p>
                    <Select
                        showSearch
                    />
                </div>

                <div className="info-input">
                    <p>Quận/Huyện</p>
                    <Select
                        showSearch
                    />
                </div>

                <div className="info-input">
                    <p>Phường/Xã</p>
                    <Select
                        showSearch
                    />
                </div>

                <div className="info-input">
                    <p>Kiểu nhà</p>
                    <Select>
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
                    <Select>
                        {typeOfArea.map((type, index) => {
                            return (
                                <Option value={type.toLowerCase()} key={'typeOfArea-' + index} name="typeOfArea">
                                    {type}
                                </Option>
                            );
                        })}
                    </Select>
                </div>

                <div className="info-input">
                    <p>Giá tiền</p>
                    <Select>
                        {typeOfPrice.map((type, index) => {
                            return (
                                <Option value={type.toLowerCase()} key={'typeOfPrice-' + index} name="typeOfPrice">
                                    {type}
                                </Option>
                            );
                        })}
                    </Select>
                </div>
            </div>
            <div className="search-button">
                <button type="submit" id="search-button">Tìm kiếm</button>
            </div>
        </div>
    )
}

export default SearchBox;