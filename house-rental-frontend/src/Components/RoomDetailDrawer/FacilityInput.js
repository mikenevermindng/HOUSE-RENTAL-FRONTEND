import React from 'react';
import {Input, Select, InputNumber} from 'antd';
import { PlusOutlined, CloseSquareFilled } from '@ant-design/icons';

const { Option } = Select;

function FacilityInput(props) {
    const facility = props.data.props.materialFacilities;

    const typeOfBathroom = [ { type: 'close', label: 'Khép kín' }, { type: 'share', label: 'Dùng chung' } ];

    return (
        <div className="info-box">
            <div className="info-input">
                <p>Phòng tắm</p>
                <Select placeholder="Phòng tắm">
                    {typeOfBathroom.map((type, index) => {
                        return (
                            <Option value={type.label} key={'typeOfBathroom-' + index} name="typeOfBathroom">
                                {type.label}
                            </Option>
                        );
                    })}
                </Select>
            </div>

            <div className="info-input">
                <p>Bình nước nóng</p>
                <Select placeholder="Bình nước nóng">
                    <Option value={true} name="electricWaterHeater">
                        Có
                    </Option>
                    <Option value={false} name="electricWaterHeater">
                        Không
                    </Option>
                </Select>
            </div>

            <div className="info-input">
                <p>Nhà bếp</p>
                <Select placeholder="Nhà bếp">
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
            </div>

            <div className="info-input">
                <p>Điều hoà</p>
                <Select placeholder="Điều hoà">
                    <Option value={true} name="airConditioner">
                        Có
                    </Option>
                    <Option value={false} name="airConditioner">
                        Không
                    </Option>
                </Select>
            </div>

            <div className="info-input">
                <p>Ban công</p>
                <Select placeholder="Ban công">
                    <Option value={true} name="balcony">
                        Có
                    </Option>
                    <Option value={false} name="balcony">
                        Không
                    </Option>
                </Select>
            </div>

            <div className="info-input">
                <p>Tủ lạnh</p>
                <Select placeholder="Tủ lạnh">
                    <Option value={true} name="fridge">
                        Có
                    </Option>
                    <Option value={false} name="fridge">
                        Không
                    </Option>
                </Select>
            </div>

            <div className="info-input">
                <p>Máy giặt</p>
                <Select placeholder="Máy giặt">
                    <Option value={true} name="washingMachine">
                        Có
                    </Option>
                    <Option value={false} name="washingMachine">
                        Không
                    </Option>
                </Select>
            </div>

            <div className="info-input">
                <p>Giường</p>
                <Select placeholder="Giường">
                    <Option value={true} name="bed">
                        Có
                    </Option>
                    <Option value={false} name="bed">
                        Không
                    </Option>
                </Select>
            </div>

            <div className="info-input">
                <p>Tủ</p>
                <Select placeholder="Tủ">
                    <Option value={true} name="wardrobe">
                        Có
                    </Option>
                    <Option value={false} name="wardrobe">
                        Không
                    </Option>
                </Select>
            </div>

            <div className="info-input">
                <p>Giá điện</p>
                <InputNumber placeholder="Giá điện" min="1" />
            </div>

            <div className="info-input">
                <p>Giá nước</p>
                <InputNumber placeholder="Giá nước" min="1" />
            </div>
        </div>
    )
}

export default FacilityInput;