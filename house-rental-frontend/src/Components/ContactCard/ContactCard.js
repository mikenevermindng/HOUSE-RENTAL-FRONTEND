import React from 'react';
import './ContactCard.css';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import RentingIcon from '../../Asset/Icon/rent.svg';

const { RangePicker } = DatePicker;


function ContactCard(props) {
    const info = props.roomInfo;

    return (
        <div className="contact-card-container">
            <div className="contact-card">
                <p id="price"><span>{info.price}đ</span>/tháng</p>
                <RangePicker />
                <InputNumber defaultValue={1}/> người
                <p>Liên hệ chủ nhà trọ: {info.contactNumber}</p>
                <button id="submit-btn">
                    <div className='btn-content'>
                        <span>Đặt ngay</span>
                        <img src={RentingIcon} alt="renting icon" />
                    </div>
                </button>
            </div>
        </div>
    )

}

export default ContactCard;