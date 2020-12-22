import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from "../Components/HeroSection/HeroSection";
import HeroSearchSection from "../Components/HeroSearchSection/HeroSearchSection";
import HomeContent from "../Components/HomeContent/HomeContent";
import LocationsFromHomepage from "../Components/HomeContent/LocationsFromHomepage";
import TypesFromHomepage from "../Components/HomeContent/TypesFromHomepage";

function Home() {
    const headline = {
        title: "Bạn cần tìm nhà trọ?",
        subtitle: "Bạn đã đến đúng nơi!"
    };

    const heroImage = "https://images.unsplash.com/photo-1542853647-47ad77242390?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

    return (
        <div>
            <Navbar/>
            <HeroSection heroImage={heroImage}>
                <HeroSearchSection headline={headline}/>
            </HeroSection>
            <HomeContent>
                <LocationsFromHomepage/>
                <TypesFromHomepage/>
            </HomeContent>
        </div>
    )
}

export default Home;