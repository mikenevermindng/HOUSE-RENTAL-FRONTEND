import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import PosterCardContainer from "../Components/PosterCardContainer/PosterCardContainer";
import HeroSection from "../Components/HeroSection/HeroSection";
import HeroSearchSection from "../Components/HeroSearchSection/HeroSearchSection";
import { BackTop, message } from "antd";
import UpArrow from '../Asset/Icon/collapse_arrow.svg';
import queryString from 'querystring'
import { apiUserGetPosters } from '../Services/accommodation_poster_services'
import InfiniteScroll from 'react-infinite-scroll-component';

const backTopStyle = {
    borderRadius: "50%",
    backgroundColor: "#F0F0F3",
    height: 80,
    width: 80,
    boxShadow: '-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export default function Rooms() {
    const roomsHeroImage = "https://bom.to/p0mKnhLr";
    const headline = {
        title: "Tìm kiếm địa điểm hoàn hảo cho bạn!",
        subtitle: ""
    };

    const [posterList, setPosterList] = useState([])

    const [page, setPage] = useState(0)

    const perPage = 12

    useEffect(() => {
        const fetchDataAsync = async () => {
            console.log(page)
            const filterOption = queryString.parse(window.location.href.split('?')[1])
            console.log(filterOption)
            const res = await apiUserGetPosters(filterOption, page, perPage)
            if (res) {
                console.log(res)
                setPosterList([...posterList, ...res.posts])
            } else {
                message.error("Tải bài đăng không thành công")
            }
        }
        fetchDataAsync()
    }, [window.location.href, page])

    return (
        <div>
            <Navbar />
            <HeroSection heroImage={roomsHeroImage}>
                <HeroSearchSection headline={headline} />
            </HeroSection>
            <InfiniteScroll
                dataLength={posterList.length} //This is important field to render the next data
                next={() => setPage(page + 1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                // below props only if you need pull down functionality
                refreshFunction={() => console.log('refresh')}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
            >
                <PosterCardContainer posterList={posterList} />
            </InfiniteScroll>

            <BackTop>
                <div style={backTopStyle}>
                    <img src={UpArrow} alt="back-top" style={{ width: "40px", height: "40px" }} />
                </div>
            </BackTop>
        </div>
    )
}