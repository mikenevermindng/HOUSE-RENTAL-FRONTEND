import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import StatisticTable from "../Components/StatisticTable/StatisticTable";
import HeroSection from "../Components/HeroSection/HeroSection";
import OwnerHeroContent from "../Components/HeroSection/OwnerHeroContent/OwnerHeroContent";
import PosterCreator from "../Components/PosterCreator/PosterCreator";
import { aptGetPosterByOwnerId } from '../Services/accommodation_poster_services'
import { message, Tabs } from 'antd'
import { useDispatch } from 'react-redux'
import { openLoginPopup } from '../Store/ActionCreator/showLoginPopupActionCreator'
import OwnerRentalRequestTable from '../Components/OwnerRentalRequestTable/OwnerRentalRequestTable'
import { apiGetRentalRequestByOwnderId } from '../Services/rental_request_services'

const { TabPane } = Tabs;

export default function Owner() {

    const ownerHeroImage = "https://bom.to/O9fh378N";
    const ownerId = "5fda10c3b4da690d101de80e";
    const dispatch = useDispatch()
    const [posterData, setPosterData] = useState([])


    useEffect(() => {
        const fetchDataAsync = async () => {
            const res = await aptGetPosterByOwnerId(ownerId)
            const rentalRequest = await apiGetRentalRequestByOwnderId(ownerId)
            if (res) {
                setPosterData(res.posts)
            } else {
                message.error("Vui lòng đăng nhập")
                dispatch(openLoginPopup())
            }
        }
        fetchDataAsync()
    }, [])


    return (
        <div className="owner-page-container">
            <Navbar />
            <HeroSection heroImage={ownerHeroImage}>
                <OwnerHeroContent data={posterData} />
            </HeroSection>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Bài đăng" key="1">
                    <StatisticTable data={posterData} ownerId={ownerId} />
                </TabPane>
                <TabPane tab="Yêu cầu thuê" key="2">
                    <OwnerRentalRequestTable ownerId={ownerId} />
                </TabPane>
            </Tabs>


        </div>
    )
}