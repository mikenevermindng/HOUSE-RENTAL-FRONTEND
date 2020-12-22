import React from 'react'
import { Tabs } from 'antd';
import AdminPosterManageTab from '../Components/AdminPageComponent/AdminPosterManagement/AdminPosterManageTab';
import AdminOwnderAccountManageTab from '../Components/AdminPageComponent/AdminOwnerAccountManagement/AdminOwnderAccountManageTab';
import AdminStatisticTab from '../Components/AdminPageComponent/AdminOwnerAccountManagement/AdminStatisticTabs';
import AdminLogin from '../Components/LoginModal/AdminLogin/AdminLogin';
import AdminForm from '../Components/LoginModal/AdminLogin/AdminForm';
import HeroSection from "../Components/HeroSection/HeroSection";
import Navbar from "../Components/Navbar/Navbar";

const { TabPane } = Tabs;

function Admin() {
    const heroImage = "https://bom.to/8z2EoSXh";

    return (
        <div>
            {!localStorage.getItem('adminToken') && <AdminLogin>
                <AdminForm />
            </AdminLogin>}
            <Navbar />
            <HeroSection heroImage={heroImage}>
                <h1 className="hero-headline">Xin chào, Admin!</h1>
            </HeroSection>

            <Tabs tabPosition="top">
                <TabPane tab="Quản lý bài đăng" key="1">
                    <AdminPosterManageTab />
                </TabPane>
                <TabPane tab="Quản lý tài khoản chủ nhà trọ" key="2">
                    <AdminOwnderAccountManageTab />
                </TabPane>
                <TabPane tab="Phân tích và thống kê" key="3">
                    <AdminStatisticTab />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Admin
