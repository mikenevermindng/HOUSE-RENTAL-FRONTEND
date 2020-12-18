import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import PosterCreator from "../Components/PosterCreator/PosterCreator";
import StatisticTable from "../Components/StatisticTable/StatisticTable";
import RoomDetailDrawer from "../Components/RoomDetailDrawer/RoomDetailDrawer";

export default function Owner() {

    //Fake Data
    const ownerData = [
        {
            key: '1',
            roomName: 'ADODDA - Vinhome Greenbay',
            address: 'Nam Từ Liêm, Hà Nội, Vietnam',
            views: 5,
            favorites: 0,
            ratings: 0,
            detail: <RoomDetailDrawer />
        },
        {
            key: '2',
            roomName: 'Ha noi Home 2 - Homestay view Hồ Tây, free xe đạp (no 3)',
            address: 'Tây Hồ, Hà Nội, Vietnam',
            views: 20,
            favorites: 0,
            ratings: 0,
            detail: <RoomDetailDrawer />
        },
        {
            key: '3',
            roomName: 'The March House 3',
            address: 'Hai Bà Trưng, Hà Nội, Vietnam',
            views: 16,
            favorites: 0,
            ratings: 0,
            detail: <RoomDetailDrawer />
        },
        {
            key: '4',
            roomName: 'Phòng Gốm - Vie De Maison',
            address: 'Ba Đình, Hà Nội, Vietnam',
            views: 3,
            favorites: 0,
            ratings: 0,
            detail: <RoomDetailDrawer />
        }
    ];

    return (
        <div className="owner-page-container">
            <Navbar />
            <StatisticTable data={ownerData} />
        </div>
    )
}