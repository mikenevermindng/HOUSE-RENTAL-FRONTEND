import React, { useState } from 'react';
import './ContactCard.css';
import 'antd/dist/antd.css';
import { InputNumber, message } from 'antd';
import { fadeInRight } from 'react-animations';
import RentingIcon from '../../Asset/Icon/rent.svg';
import HeartIcon from '../../Asset/Icon/heart_filled.svg'
import { apiUserLikeAction, apiUserUnlikeAction } from '../../Services/rating_service'
import { apiGenerateRentalRequest } from '../../Services/rental_request_services'
import { useDispatch } from 'react-redux'
import { openLoginPopup } from '../../Store/ActionCreator/showLoginPopupActionCreator'

function ContactCard(props) {
    const info = props.roomInfo;
    console.log(info)
    const { rating, userId, ownerId, posterId } = info

    const dispatch = useDispatch()

    const [isLikedByUser, setLikedByUser] = useState(rating.likedUser.findIndex(like => like.userId === userId) !== -1)

    const [numberOfPeople, setNumberOfPeople] = useState(1)

    const generateRentalRequest = async () => {
        try {
            const res = await apiGenerateRentalRequest(ownerId, posterId, numberOfPeople)
            message.info(res.message)
        } catch (error) {
            console.log(error)
            message.error("Phiên làm việc của bạn đã hết hạn")
            dispatch(openLoginPopup())
        }

    }

    const userLikeClickHandler = async () => {
        if (!isLikedByUser) {
            const res = await apiUserLikeAction(rating._id, userId)
            setLikedByUser(true)
        } else {
            const res = await apiUserUnlikeAction(rating._id, userId)
            setLikedByUser(false)
        }
    }

    return (
        <div className="contact-card-container" style={fadeInRight}>
            <div className="contact-card">
                <div className="favorite" onClick={userLikeClickHandler}>
                    {isLikedByUser ? <img src={HeartIcon} alt="heart" id="heart" /> : null}
                </div>
                <p id="price"><span>{info.price}đ</span>/tháng</p>
                <InputNumber defaultValue={1} min="1" onChange={e => setNumberOfPeople(e.target.value)} /> người
                <div>
                    <p>Liên hệ chủ nhà trọ:</p>
                    <p>- Hotline:
                        <a href={"tel:" + info.contactNumber}> {info.contactNumber}</a>
                    </p>
                    <p>- Email:
                        <span> {info.email}</span>
                    </p>
                </div>
                <button id="submit-btn" onClick={generateRentalRequest}>
                    <div className='btn-content'>
                        <span>Đặt ngay</span>
                        <img src={RentingIcon} alt="renting icon" id="icon" />
                    </div>
                </button>
            </div>
        </div>
    )

}

export default ContactCard;