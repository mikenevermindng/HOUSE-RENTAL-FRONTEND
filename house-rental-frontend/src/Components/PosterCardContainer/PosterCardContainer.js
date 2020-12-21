import React, { useState, useEffect } from 'react';
import { Row, Col, message } from 'antd';
import PosterCard from "./PosterCard/PosterCard";
import './PosterCardContainer.css';
import { apiUserGetPosters } from '../../Services/accommodation_poster_services'

function PosterCardContainer() {

    const [posterList, setPosterList] = useState([])

    useEffect(() => {
        const fetchDataAsync = async () => {
            const res = await apiUserGetPosters()
            if (res) {
                console.log(res)
                setPosterList(res.posts)
            } else {
                message.error("Tải bài đăng không thành công")
            }
        }
        fetchDataAsync()
    }, [])

    return (
        <div className="poster-card-container">
            <Row gutter={[{ xs: 0, sm: 0, md: 40, lg: 60 }, 60]}>
                {posterList.map((roomCard) => {
                    return (
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <PosterCard data={roomCard} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default PosterCardContainer;