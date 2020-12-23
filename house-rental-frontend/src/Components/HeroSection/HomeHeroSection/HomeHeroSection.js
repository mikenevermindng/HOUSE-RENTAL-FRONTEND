import React from 'react';
import '../HeroSection.css';
import './HomeHeroSection.css';

function HeroSection({children, heroVideo}) {
    return (
        <div className="hero-section">
            <video autoPlay muted loop id="hero-video">
                <source src={heroVideo} type="video/mp4"/>
            </video>

            {children}
        </div>
    )
}

export default HeroSection;