import React from 'react';
import { useDispatch } from 'react-redux'
import { openPosterCreator } from '../../../Store/ActionCreator/showPosterCreatorActionCreator'

function OwnerHeroContent(props) {

    const dispatch = useDispatch()

    const showPosterCreatorPopup = () => {
        dispatch(openPosterCreator())
    }

    return (
        <div className="content-container">
            <h1 className="hero-headline">Xin chào, </h1>
            <p className="hero-subtitle">Hãy để mọi người biết đến thiên đường của bạn</p>
            <div className="hero-buttons">
                <button onClick={showPosterCreatorPopup}>Đăng bài</button>
                <button>Liên hệ admin</button>
            </div>
        </div>
    )
}

export default OwnerHeroContent;