import React, { useState, useEffect } from 'react';
import { Row, Col, message } from 'antd';
import PosterCard from "./PosterCard/PosterCard";
import './PosterCardContainer.css';
import { apiUserGetPosters } from '../../Services/accommodation_poster_services'
import queryString from 'querystring'

function PosterCardContainer({ location }) {

    const [posterList, setPosterList] = useState([])

    useEffect(() => {
        const fetchDataAsync = async () => {
            const filterOption = queryString.parse(window.location.href.split('?')[1])
            const res = await apiUserGetPosters(filterOption)
            if (res) {
                console.log(res)
                setPosterList(res.posts)
            } else {
                message.error("Tải bài đăng không thành công")
            }
        }
        fetchDataAsync()
    }, [window.location.href])

    return (
        <div className="poster-card-container">
            <Row gutter={[{ xs: 0, sm: 0, md: 40, lg: 60 }, 60]}>
                {posterList.map((roomCard, index) => {
                    return (
                        <Col xs={24} sm={24} md={12} lg={8} key={'card-' + index}>
                            <PosterCard data={roomCard} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default PosterCardContainer;