import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import PosterCardContainer from "../Components/PosterCardContainer/PosterCardContainer";
import HeroSection from "../Components/HeroSection/HeroSection";
import HeroSearchSection from "../Components/HeroSearchSection/HeroSearchSection";
import {BackTop} from "antd";
import UpArrow from '../Asset/Icon/collapse_arrow.svg';

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
    const headline = "Tìm kiếm địa điểm hoàn hảo cho bạn!";

    return (
        <div>
            <Navbar/>
            <HeroSection heroImage={roomsHeroImage}>
                <HeroSearchSection headline={headline}/>
            </HeroSection>
            <PosterCardContainer/>
            <BackTop>
                <div style={backTopStyle}>
                    <img src={UpArrow} alt="back-top" style={{width: "40px", height: "40px"}}/>
                </div>
            </BackTop>
        </div>
    )
}