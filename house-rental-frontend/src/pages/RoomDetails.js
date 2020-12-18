import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import RoomInfo from '../Components/RoomInfo/RoomInfo';
import { useParams } from "react-router-dom";
import { apiGetPosterById } from '../Services/accommodation_poster_services'

export default function RoomDetails() {

    let { accomodId } = useParams();
    const [accomodInfo, setAccomodInfo] = useState(null)
    const [imagesList, setImagesList] = useState([])

    useEffect(() => {
        (async () => {
            const res = await apiGetPosterById(accomodId)
            const { post } = res
            setImagesList(post.images)
            setAccomodInfo({
                name: post.title,
                location: post.address + ' ' + post.subDistrict + ' ' + post.district + ' ' + post.city,
                type: post.typeOfAccommodation,
                posterId: post._id,
                area: post.area,
                description: post.description,
                price: post.pricePerMonth,
                services: post.materialFacilities,
                contactNumber: '123456',
                email: 'sharingHome@email.com',
                userId: '5fd827c26c982835a08b9487',
                username: "Micheal",
                ownerId: post.ownerId,
                rating: post.rating,
                nearbyLocations: [
                    'Smack Dab - Urban Lounge - JW Marriott Hotel Hanoi',
                    'Sumo BBQ - Nhà Hàng Thịt Nướng Nhật Bản - Trung Yên',
                    'Big C Thăng Long',
                    'Villa Ju Bakery'
                ]
            })
        })()
    }, [accomodId])

    return (
        <div>
            <Navbar />
            <Carousel images={imagesList} />
            {accomodInfo ? <RoomInfo information={accomodInfo} /> : null}
        </div>
    )
}