import React from 'react';
import './RoomLocation.css';
import GoogleMapAPI from '../GoogleMapAPI/GoogleMapAPI';

function RoomLocation(props) {
    const locations = props.roomInfo.nearbyLocations;

    return (
        <div className="room-location">
            <h1>Tiện ích xung quanh</h1>
            <div className="locations-list">
                {locations.map((location, index) => {
                    return (
                        <div className="location">
                            {index + 1}. {location}
                        </div>
                    )
                })}
                <div className="map">
                    <GoogleMapAPI />
                </div>
            </div>
        </div>
    )
}

export default RoomLocation;