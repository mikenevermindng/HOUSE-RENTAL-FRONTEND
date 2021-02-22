import React, { useState, useEffect } from 'react';
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
import { apiGetOwnerAccount } from '../../Services/owner_services'

function ContactCard(props) {
    const info = props.roomInfo;
    console.log(info)
    const { rating, ownerId, posterId } = info

    const userId = localStorage.getItem('userId')

    const dispatch = useDispatch()

    const [isLikedByUser, setLikedByUser] = useState(rating.likedUser.findIndex(like => like.userId === userId) !== -1)

    const [numberOfPeople, setNumberOfPeople] = useState(1)

    const [ownerInfo, setOwnerInfo] = useState({})

    useEffect(() => {
        const fetchDataAsync = async () => {
            const res = await apiGetOwnerAccount(ownerId)
            console.log(res)
            if (res) {
                setOwnerInfo(res.owner)
            } else {
                message.error("Tải dữ liệu thất bại")
            }
        }
        fetchDataAsync()
    }, [])

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
        const token = localStorage.getItem('token')
        if (!isLikedByUser) {
            const res = await apiUserLikeAction(rating._id, token)
            if (res) {
                setLikedByUser(true)
            }
            else {
                dispatch(openLoginPopup())
                message.error("Bạn phải đăng nhập để dùng tính năng này")
            }
        } else {
            const res = await apiUserUnlikeAction(rating._id, token)
            if (res) {
                setLikedByUser(false)
            } else {
                dispatch(openLoginPopup())
                message.error("Bạn phải đăng nhập để dùng tính năng này")
            }

        }
    }

    return (
        <div className="contact-card-container" style={fadeInRight}>
            <div className="contact-card">
                <div className="favorite" onClick={userLikeClickHandler}>
                    {isLikedByUser ? <img src={HeartIcon} alt="heart" id="heart" /> : null}
                </div>
                <p id="price"><span>{info.price}đ</span>/tháng</p>
                <InputNumber defaultValue={1} min="1" onChange={value => setNumberOfPeople(value)} /> người
                <div>
                    <p>Liên hệ chủ nhà trọ:</p>
                    <p>- Hotline:
                        <a href={"tel:" + (ownerInfo ? ownerInfo.phoneNumber : "")}>
                            {ownerInfo ? ownerInfo.phoneNumber : "Liên hệ Admin"}
                        </a>
                    </p>
                    <p>- Email:
                        <span> {ownerInfo ? ownerInfo.email : 'Liên hệ Admin'}</span>
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