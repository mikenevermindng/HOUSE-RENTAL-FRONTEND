import React from 'react';
import {openPosterCreator} from "../../../Store/ActionCreator/showPosterCreatorActionCreator";
import { useDispatch } from 'react-redux'

function AdminHeroContent() {
    const dispatch = useDispatch()

    const showPosterCreatorPopup = () => {
        dispatch(openPosterCreator())
    }

    return (
        <div className="content-container">
            <h1 className="hero-headline">Xin chào, Admin!</h1>
            <div className="hero-buttons">
                <button onClick={showPosterCreatorPopup}>Đăng bài</button>
            </div>
        </div>
    )
}

export default AdminHeroContent;