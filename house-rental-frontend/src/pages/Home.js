import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HomeHeroSection from "../Components/HeroSection/HomeHeroSection/HomeHeroSection";
import HeroSearchSection from "../Components/HeroSearchSection/HeroSearchSection";
import HomeContent from "../Components/HomeContent/HomeContent";
import LocationsFromHomepage from "../Components/HomeContent/LocationsFromHomepage";
import UpArrow from "../Asset/Icon/collapse_arrow.svg";
import {BackTop} from "antd";
import HeroVideo from "../Asset/Vid/Villa Sunnano.mp4";

function Home() {
    const headline = {
        title: "Bạn cần tìm nhà trọ?",
        subtitle: "Bạn đã đến đúng nơi!"
    };

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

    return (
        <div>
            <Navbar/>
            <HomeHeroSection heroVideo={HeroVideo}>
                <HeroSearchSection headline={headline}/>
            </HomeHeroSection>
            <HomeContent>
                <LocationsFromHomepage/>
            </HomeContent>
            <BackTop>
                <div style={backTopStyle}>
                    <img src={UpArrow} alt="back-top" style={{width: "40px", height: "40px"}}/>
                </div>
            </BackTop>
        </div>
    )
}

export default Home;