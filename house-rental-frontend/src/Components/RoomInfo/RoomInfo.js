import React from 'react';
import './RoomInfo.css';
import RoomService from "../RoomService/RoomService";
import RoomLocation from "../RoomLocation/RoomLocation";
import ContactCard from "../ContactCard/ContactCard";
import LocationIcon from '../../Asset/Icon/location.svg';
import RoomIcon from '../../Asset/Icon/room.svg';


function RoomInfo(props) {
    const roomInfo = props.information;

    return (
        <div className="room-info">
            <h1 id="room-name">
                {roomInfo.name}
            </h1>

            <div className="info-container">

                <div className="left-info">

                    <div className="brief-info">
                        <img src={LocationIcon} alt="location" />
                        <p className="brief-info-text">
                            {roomInfo.location}
                        </p>
                    </div>

                    <div className="brief-info">
                        <img src={RoomIcon} alt="type and area" />
                        <p className="brief-info-text">
                            {roomInfo.type}
                        </p>
                        <span> · </span>
                        <p className="brief-info-text">
                            {roomInfo.area}m2
                        </p>
                    </div>

                    <p id="room-description">
                        {roomInfo.description}
                    </p>

                    <RoomService roomInfo={roomInfo} />

                    <RoomLocation roomInfo={roomInfo} />

                </div>

                <div className="right-info">
                    <ContactCard roomInfo={roomInfo} />
                </div>
            </div>
        </div>
    )
}

export default RoomInfo;