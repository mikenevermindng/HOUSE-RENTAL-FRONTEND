import React from 'react'
import { Tabs } from 'antd';
import AdminPosterManageTab from '../Components/AdminPageComponent/AdminPosterManagement/AdminPosterManageTab';
import AdminOwnderAccountManageTab from '../Components/AdminPageComponent/AdminOwnerAccountManagement/AdminOwnderAccountManageTab';
import AdminStatisticTab from '../Components/AdminPageComponent/AdminOwnerAccountManagement/AdminStatisticTabs'

const { TabPane } = Tabs;

function Admin() {
    return (
        <div>
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
