import React from 'react'
import { Tabs } from 'antd';
import AdminPosterManageTab from '../Components/AdminPageComponent/AdminPosterManagement/AdminPosterManageTab';
import AdminOwnderAccountManageTab from '../Components/AdminPageComponent/AdminOwnerAccountManagement/AdminOwnderAccountManageTab';
import AdminStatisticTab from '../Components/AdminPageComponent/AdminOwnerAccountManagement/AdminStatisticTabs';
import AdminLogin from '../Components/LoginModal/AdminLogin/AdminLogin';
import AdminForm from '../Components/LoginModal/AdminLogin/AdminForm';
import HeroSection from "../Components/HeroSection/HeroSection";
import Navbar from "../Components/Navbar/Navbar";
import AdminCommentManageTable from '../Components/AdminPageComponent/AdminCommentManageTab/AdminCommentManageTable';
import { Link } from 'react-router-dom'
import ChatIcon from '../Asset/Icon/chat_room.svg';

const { TabPane } = Tabs;

function Admin() {
    const heroImage = "https://bom.to/8z2EoSXh";

    return (
        <div style={{ position: "relative" }}>
            {!sessionStorage.getItem('adminToken') && <AdminLogin>
                <AdminForm />
            </AdminLogin>}
            <Navbar />
            <HeroSection heroImage={heroImage}>
                <h1 className="hero-headline">Xin chào, Admin!</h1>
            </HeroSection>
            <Link to={"/chat/admin"} target="_blank">
                <div className="notification-box"
                    style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#F0F0F3",
                        borderRadius: "50%",
                        boxShadow: "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)",
                        zIndex: "97",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "fixed",
                        left: "25px",
                        bottom: "25px",
                        cursor: "pointer"
                    }}
                >
                    <img src={ChatIcon} alt="chat-icon" style={{ width: "45px" }} />
                </div>
            </Link>
            <Tabs tabPosition="top">
                <TabPane tab="Quản lý bài đăng" key="1">
                    <AdminPosterManageTab />
                </TabPane>
                <TabPane tab="Quản lí bình luận" key="2">
                    <AdminCommentManageTable />
                </TabPane>
                <TabPane tab="Quản lý tài khoản chủ nhà trọ" key="3">
                    <AdminOwnderAccountManageTab />
                </TabPane>
                <TabPane tab="Phân tích và thống kê" key="4">
                    <AdminStatisticTab />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Admin
