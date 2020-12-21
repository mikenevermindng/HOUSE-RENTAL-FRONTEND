import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import StatisticTable from "../Components/StatisticTable/StatisticTable";
import HeroSection from "../Components/HeroSection/HeroSection";
import OwnerHeroContent from "../Components/HeroSection/OwnerHeroContent/OwnerHeroContent";

import { Tabs } from 'antd'
import OwnerRentalRequestTable from '../Components/OwnerRentalRequestTable/OwnerRentalRequestTable'

const { TabPane } = Tabs;

export default function Owner() {

    const ownerHeroImage = "https://bom.to/O9fh378N";
    const ownerId = "5fdd7c6fe2f006295c3096d6";

    return (
        <div className="owner-page-container">
            <Navbar />
            <HeroSection heroImage={ownerHeroImage}>
                <OwnerHeroContent />
            </HeroSection>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Bài đăng" key="1">
                    <StatisticTable ownerId={ownerId} />
                </TabPane>
                <TabPane tab="Yêu cầu thuê" key="2">
                    <OwnerRentalRequestTable ownerId={ownerId} />
                </TabPane>
            </Tabs>


        </div>
    )
}