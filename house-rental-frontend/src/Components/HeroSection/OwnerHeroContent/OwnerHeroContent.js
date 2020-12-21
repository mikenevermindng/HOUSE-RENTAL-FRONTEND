import React from 'react';
import PosterCreator from "../../PosterCreator/PosterCreator";

function OwnerHeroContent(props) {

    return (
        <div className="content-container">
            <h1 className="hero-headline">Xin chào, </h1>
            <p className="hero-subtitle">Hãy để mọi người biết đến thiên đường của bạn</p>
            <div className="hero-buttons">
                <button>Đăng bài</button>
                <button>Liên hệ admin</button>
            </div>
        </div>
    )
}

export default OwnerHeroContent;