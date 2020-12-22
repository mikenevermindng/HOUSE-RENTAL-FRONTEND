import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import PosterCardContainer from "../Components/PosterCardContainer/PosterCardContainer";
import HeroSection from "../Components/HeroSection/HeroSection";
import HeroSearchSection from "../Components/HeroSearchSection/HeroSearchSection";
import { BackTop, message } from "antd";
import UpArrow from '../Asset/Icon/collapse_arrow.svg';
import queryString from 'querystring'
import { apiUserGetPosters } from '../Services/accommodation_poster_services'

const backTopStyle = {
    borderRadius: "50%",
    backgroundColor: "#F0F0F3",
    height: 80,
    width: 80,
    boxShadow: '-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export default function Rooms() {
    const roomsHeroImage = "https://bom.to/p0mKnhLr";
    const headline = {
        title: "Tìm kiếm địa điểm hoàn hảo cho bạn!",
        subtitle: ""
    };

    const [posterList, setPosterList] = useState([])

    useEffect(() => {
        const fetchDataAsync = async () => {
            const filterOption = queryString.parse(window.location.href.split('?')[1])
            console.log(filterOption)
            const res = await apiUserGetPosters(filterOption)
            if (res) {
                console.log(res)
                setPosterList(res.posts)
            } else {
                message.error("Tải bài đăng không thành công")
            }
        }
        fetchDataAsync()
    }, [window.location.href])

    return (
        <div>
            <Navbar />
            <HeroSection heroImage={roomsHeroImage}>
                <HeroSearchSection headline={headline} />
            </HeroSection>
            <PosterCardContainer posterList={posterList} />
            <BackTop>
                <div style={backTopStyle}>
                    <img src={UpArrow} alt="back-top" style={{ width: "40px", height: "40px" }} />
                </div>
            </BackTop>
        </div>
    )
}