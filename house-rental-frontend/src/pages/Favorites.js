import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import PosterCardContainer from "../Components/PosterCardContainer/PosterCardContainer";

function Favorites() {
    return (
        <div>
            <Navbar/>
            <h1
                style={{
                    marginTop: "140px"
                }}
            >Các bài đăng bạn đã lưu</h1>
            <PosterCardContainer/>
        </div>
    )
}

export default Favorites;