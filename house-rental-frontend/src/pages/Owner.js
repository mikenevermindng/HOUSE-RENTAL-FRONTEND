import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import StatisticTable from "../Components/StatisticTable/StatisticTable";
import HeroSection from "../Components/HeroSection/HeroSection";
import OwnerHeroContent from "../Components/HeroSection/OwnerHeroContent/OwnerHeroContent";

import { Tabs } from 'antd'
import OwnerRentalRequestTable from '../Components/OwnerRentalRequestTable/OwnerRentalRequestTable'
import OwnerLoginPopup from '../Components/LoginModal/index'
import OwnerLoginForm from '../Components/LoginModal/OwnerForm/login'
import OwnerRegisterForm from '../Components/LoginModal/OwnerForm/register'
import { useSelector } from 'react-redux'
import PosterCreator from '../Components/PosterCreator/PosterCreator';

const { TabPane } = Tabs;

export default function Owner() {

    const ownerHeroImage = "https://bom.to/O9fh378N";

    const isShowPosterCreatorReducer = useSelector(state => state.isShowPosterCreatorReducer)

    return (
        <div className="owner-page-container">
            <Navbar />
            <HeroSection heroImage={ownerHeroImage}>
                <OwnerHeroContent />
            </HeroSection>
            <div className="tab-container">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Bài đăng" key="1">
                        <StatisticTable />
                    </TabPane>
                    <TabPane tab="Yêu cầu thuê" key="2">
                        <OwnerRentalRequestTable />
                    </TabPane>
                </Tabs>
            </div>
            {sessionStorage.getItem('ownerToken') === null && (
                <OwnerLoginPopup>
                    <OwnerLoginForm />
                    <OwnerRegisterForm />
                </OwnerLoginPopup>
            )}
            {isShowPosterCreatorReducer && <PosterCreator />}
        </div>
    )
}