import React from 'react';
import './HeroSection.css';

function HeroSection({children, heroImage}) {
    const heroStyle = {
        width: "100%",
        minHeight: "calc(100vh - 160px)",
        display: "flex",
        marginTop: "80px",
        justifyContent: "center",
        backgroundImage: "linear-gradient(#333, rgba(51, 51, 51, 0.4)) ,url(" + heroImage + ")",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        clipPath: "polygon(100% 0, 100% 89%, 76% 100%, 0 85%, 0 0)"
    }

    return (
        <div className="hero-section" style={ heroStyle }>
            {children}
        </div>
    )
}

export default HeroSection;