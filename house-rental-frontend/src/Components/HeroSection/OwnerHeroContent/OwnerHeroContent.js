import React, { useState } from 'react';
import PosterCreator from "../../PosterCreator/PosterCreator";

function OwnerHeroContent(props) {
    const owner = props.data;

    return (
        <div className="content-container">
            <h1 className="hero-headline">Xin chào, {owner[0].name}</h1>
            <p className="hero-subtitle">Hãy để mọi người biết đến thiên đường của bạn</p>
            <div className="hero-buttons">
                <button>Đăng bài</button>
                <button>Liên hệ admin</button>
            </div>
        </div>
    )
}

export default OwnerHeroContent;