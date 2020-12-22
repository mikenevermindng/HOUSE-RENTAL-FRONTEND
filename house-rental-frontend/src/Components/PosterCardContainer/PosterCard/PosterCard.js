import React, { useState } from 'react';
import { Card, Rate, Tooltip } from 'antd';
import { BorderOuterOutlined, HeartFilled, HomeFilled, LayoutFilled } from '@ant-design/icons';
import Slider from '../../Slider/Slider';
import classNames from 'classnames';
import './PosterCard.css';
import { apiUserLikeAction, apiUserUnlikeAction } from '../../../Services/rating_service'
import { Link } from 'react-router-dom'

function PosterCard(props) {

    const {
        _id,
        title,
        pricePerMonth,
        address,
        subDistrict,
        district,
        city,
        typeOfAccommodation,
        area,
        numberOfRoom,
        rating,
        images
    } = props.data

    const { rate } = rating

    const imagesList = images.map(img => {
        return {
            background: "http://localhost:3001/" + img.replace('\\', '/')
        }
    })


    const userId = localStorage.getItem('userId')

    const [isLike, setIsLike] = useState(rating.likedUser.findIndex(like => like.userId === userId) !== -1);

    const userLikeClickHandler = async () => {
        if (!isLike) {
            const res = await apiUserLikeAction(rating._id, userId)
            setIsLike(true)
        } else {
            const res = await apiUserUnlikeAction(rating._id, userId)
            setIsLike(false)
        }
    }

    return (
        <Card cover={<Slider slides={imagesList} />} className="card-wrapper">
            <div className="card-content-wrapper">
                <div className="card-meta">
                    <div className="card-title">
                        <Tooltip placement="topLeft" title={title}>
                            <Link to={"/room-details/" + _id} target="_blank"><span>{title}</span></Link>
                        </Tooltip>
                    </div>
                    <div className="card-description">
                        <Tooltip placement="topLeft" title={address + ' ' + subDistrict + ' ' + district + ' ' + city}>
                            <span>{address + ' ' + subDistrict + ' ' + district + ' ' + city}</span>
                        </Tooltip>
                    </div>
                </div>
                <div className="item-media-price">
                    <span className="item-price">
                        {pricePerMonth}<sup>đ</sup>
                        <sub>/tháng</sub>
                    </span>
                </div>

                <div className="card-icon-container">
                    <Tooltip placement="topLeft" title={"Kiểu nhà: " + typeOfAccommodation}>
                        <div className="card-icon">
                            <span>
                                <HomeFilled />
                            </span>
                        </div>
                    </Tooltip>

                    <Tooltip placement="topLeft" title={"Diện tích: " + area + 'm2'}>
                        <div className="card-icon">
                            <span>
                                <BorderOuterOutlined />
                            </span>
                        </div>
                    </Tooltip>

                    <Tooltip placement="topLeft" title={"Số phòng: " + numberOfRoom}>
                        <div className="card-icon">
                            <span>
                                <LayoutFilled />
                            </span>
                        </div>
                    </Tooltip>
                </div>

                <div className="card-action">
                    <div>
                        <Rate allowHalf defaultValue={rate} disabled />
                    </div>
                    <div>
                        <div className="card-action-icon" onClick={userLikeClickHandler}>
                            <HeartFilled className={classNames({ liked: isLike })} />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default PosterCard;
