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
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h1
                    style={{
                        marginTop: "140px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        fontFamily: "Pattaya, sans-serif",
                        fonWeight: "lighter",
                        fontSize: "40px"
                    }}
                >Các bài đăng bạn đã lưu</h1>
            </div>
            <PosterCardContainer posterList={posterList} />
        </div>
    )
}

export default Favorites;