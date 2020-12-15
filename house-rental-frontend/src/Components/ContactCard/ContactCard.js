import React, { createElement } from 'react';
import './ContactCard.css';
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';
import { fadeInRight } from 'react-animations';
import RentingIcon from '../../Asset/Icon/rent.svg';
import HeartIcon from '../../Asset/Icon/heart_filled.svg'

function ContactCard(props) {
    const info = props.roomInfo;

    return (
        <div className="contact-card-container" style={fadeInRight}>
            <div className="contact-card">
                <div className="favorite">
                    <img src={HeartIcon} alt="heart" id="heart"/>
                </div>
                <p id="price"><span>{info.price}đ</span>/tháng</p>
                <InputNumber defaultValue={1} min="1"/> người
                <p>Liên hệ chủ nhà trọ:
                    <p>- Hotline:
                        <a href={"tel:"+info.contactNumber}> {info.contactNumber}</a>
                    </p>
                    <p>- Email:
                        <a href={info.email}> {info.email}</a>
                    </p>
                </p>
                <button id="submit-btn">
                    <div className='btn-content'>
                        <span>Đặt ngay</span>
                        <img src={RentingIcon} alt="renting icon" id="icon"/>
                    </div>
                </button>
            </div>
        </div>
    )

}

export default ContactCard;