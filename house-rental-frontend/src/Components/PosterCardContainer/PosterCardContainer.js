import React, { useState, useEffect } from 'react';
import { Row, Col, message } from 'antd';
import PosterCard from "./PosterCard/PosterCard";
import './PosterCardContainer.css';
import { apiUserGetPosters } from '../../Services/accommodation_poster_services'
import queryString from 'querystring'

function PosterCardContainer(props) {

    const { posterList } = props

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