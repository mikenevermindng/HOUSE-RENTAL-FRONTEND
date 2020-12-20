import React from 'react';
import './HeroSection.css';

function HeroSection({children, heroImage}) {
    const heroStyle = {
        backgroundImage: "linear-gradient(#333, rgba(51, 51, 51, 0.4)) ,url(" + heroImage + ")",
    }

    return (
        <div className="hero-section" style={ heroStyle }>
            {children}
        </div>
    )
}

export default HeroSection;