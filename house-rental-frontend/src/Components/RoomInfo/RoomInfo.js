import React from 'react';
import './RoomInfo.css';
import RoomService from "../RoomService/RoomService";
import RoomLocation from "../RoomLocation/RoomLocation";
import ContactCard from "../ContactCard/ContactCard";
import Ratings from "../Ratings/Ratings";
import { Typography } from 'antd';
import LocationIcon from '../../Asset/Icon/location.svg';
import RoomIcon from '../../Asset/Icon/room.svg';

const { Paragraph } = Typography;

function RoomInfo(props) {
    const roomInfo = props.information;

    //Fake data
    const ratings = [
        {
            name: "Nguyễn Văn A",
            content: "Chỗ ở tốt, sẽ quay lại.",
            rating: 4.5
        },
        {
            name: "Nguyễn Văn B",
            content: "Tạm được",
            rating: 3
        },
        {
            name: "Trần Đức C",
            content: "Ở rất thích, giống như quảng cáo",
            rating: 5
        },
        {
            name: "Đinh Tiến D",
            content: "Sạch sẽ, thoáng mát, vừa túi tiền.",
            rating: 4
        },
        {
            name: "Trần Đức E",
            content: "Tệ. Không quay lại",
            rating: 1.5
        }
    ];

    return (
        <div className="room-info">
            <h1 id="room-name">
                {roomInfo.name}
            </h1>

            <div className="info-container">

                <div className="left-info">

                    <div className="brief-info">
                        <img src={LocationIcon} alt="location" className="info-icon"/>
                        <p className="brief-info-text">
                            {roomInfo.location}
                        </p>
                    </div>

                    <div className="brief-info">
                        <img src={RoomIcon} alt="type and area" className="info-icon"/>
                        <p className="brief-info-text">
                            {roomInfo.type}
                        </p>
                        <span> · </span>
                        <p className="brief-info-text">
                            {roomInfo.area}m2
                        </p>
                    </div>

                    <p id="room-description">
                        <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'Xem thêm' }}>
                            {roomInfo.description}
                        </Paragraph>
                    </p>

                    <RoomService roomInfo={roomInfo} />

                    <RoomLocation roomInfo={roomInfo} />

                    <Ratings ratings={ratings}/>

                </div>

                <div className="right-info">
                    <ContactCard roomInfo={roomInfo} />
                </div>
            </div>
        </div>
    )
}

export default RoomInfo;