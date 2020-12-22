import React from 'react';
import { useDispatch } from 'react-redux'
import { openPosterCreator } from '../../../Store/ActionCreator/showPosterCreatorActionCreator'
import { createChatbox } from '../../../Services/chatbox_services'
import { message } from 'antd'

function OwnerHeroContent(props) {

    const createChatBox = async () => {
        const response = await createChatbox()
        if (response) {
            window.open('http://localhost:3000/chat', '_blank', 'noopener,noreferrer')
        }
    }

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
                <button onClick={createChatBox}>Liên hệ admin</button>
            </div>
        </div>
    )
}

export default OwnerHeroContent;