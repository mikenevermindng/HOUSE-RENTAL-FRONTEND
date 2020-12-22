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

    const heroImage = "https://images.unsplash.com/photo-1542853647-47ad77242390?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

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