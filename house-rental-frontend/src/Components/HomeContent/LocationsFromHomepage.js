import React from 'react';
import { Link } from 'react-router-dom'
import queryString from 'querystring'

export default function LocationsFromHomepage() {
    const locations = [
        {
            name: "Hà Nội",
            image: "https://bom.to/Fa1q4gqU"
        },
        {
            name: "Thành phố Hồ Chí Minh",
            image: "https://bom.to/0zuU921p"
        },
        {
            name: "Đà Nẵng",
            image: "https://bom.to/mD0vSQEv"
        },
        {
            name: "Khánh Hòa",
            image: "https://bom.to/NWd6YXpI"
        },
        {
            name: "Hải Phòng",
            image: "https://bom.to/wzfV23U0"
        },
        {
            name: "Cần Thơ",
            image: "https://bom.to/Z6eVhc58"
        },
        {
            name: "Thừa Thiên Huế",
            image: "https://bom.to/yUxMio67"
        }
    ]

    return (
        <div id="top-content">
            <h1 className="foreground-title">Những địa điểm nổi bật</h1>
            <h1 className="background-title">Những địa điểm nổi bật</h1>
            <div className="location-box-container">
                {locations.map((location) => {
                    return (
                        <Link to={"/rooms?" + queryString.stringify({ city: location.name })} target="_blank">
                            <div className="location-box"
                                style={{
                                    backgroundImage: "linear-gradient(rgba(51, 51, 51, 0.55), rgba(51, 51, 51, 0.55)), url(" + location.image + ")"
                                }}
                            >
                                <h1>{location.name}</h1>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div >
    )
}