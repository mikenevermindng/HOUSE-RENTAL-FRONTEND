import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import PosterCardContainer from "../Components/PosterCardContainer/PosterCardContainer";
import { apiGetFavoritesPosterForUser } from '../Services/accommodation_poster_services'
import { useDispatch, useSelector } from 'react-redux'
import { openLoginPopup } from '../Store/ActionCreator/showLoginPopupActionCreator'


function Favorites() {

    const [posterList, setPosterList] = useState([])

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)

    useEffect(() => {
        const fetchDataAsync = async () => {
            const res = await apiGetFavoritesPosterForUser()
            if (res.length === 0) {
                dispatch(openLoginPopup())
            } else {
                setPosterList(res.posts)
            }
        }
        fetchDataAsync()
    }, [auth])

    return (
        <div>
            <Navbar />
            <h1
                style={{
                    marginTop: "140px"
                }}
            >Các bài đăng bạn đã lưu</h1>
            <PosterCardContainer posterList={posterList} />
        </div>
    )
}

export default Favorites;