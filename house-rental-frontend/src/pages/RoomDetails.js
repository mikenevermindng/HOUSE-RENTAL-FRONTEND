import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import RoomInfo from '../Components/RoomInfo/RoomInfo';

export default function RoomDetails() {
    const slides = [
        {
            background: 'https://www.w3schools.com/w3images/coffee.jpg',
            text: 'Coffee'
        },
        {
            background: 'https://www.w3schools.com/w3images/workbench.jpg',
            text: 'Workbench'
        },
        {
            background: 'https://www.w3schools.com/w3images/sound.jpg',
            text: 'Sound'
        }
    ]

    const information = {
        name: 'San\'s Home [Sharing home]',
        location: 'Cầu Giấy, Hà Nội, Việt Nam',
        type: 'Căn hộ chung cư',
        area: '30',
        description: 'Một căn phòng tràn ngập ánh nắng, cây và sách. Vô cùng thoáng đãng và thoải mái. Bạn có thể ngắm hoàng hôn tím lịm phía chân trời, giữa những tòa nhà, nghe tiếng rao văng vẳng của những người bán dạo. Đúng chất Hà Nội, San\'s Homestay nằm trong một khu chung cư cũ nhưng căn hộ được tự tay San chăm bẵm, trang trí. Bạn có thể tìm thấy nhiều điều thú vị xung quanh khu nhà.\n' +
            '\n' +
            'Hiện San đang học tập và sinh sống ở nước ngoài, để được hỗ trợ, vui lòng liên hệ Ms. Giang. San\'s Home là căn hộ chia sẻ, quản gia sẽ ở một phòng riêng cùng căn hộ.\n' +
            '\n' +
            'Chúng tôi dành tất cả những gì tuyệt vời nhất cho căn hộ xinh đẹp này để chờ đến ngày được chào đón bạn. Thiết kế chủ đạo với tông màu trắng cùng nội thất tốt giúp ngôi nhà trẻ trung và ấm cúng, mang đến cho bạn cảm giác như đang ở trong chính ngôi nhà của mình vậy.\n' +
            '\n' +
            'Bên cạnh đó, chúng tôi cũng là một người địa phương vô cùng thân thiện và thoải mái. Chúng tôi cùng chia sẻ căn hộ với bạn, chính vì vậy đừng ngại ngần chia sẻ với chúng tôi những điều bạn đang thắc mắc hoặc những khó khăn bạn gặp phải khi ở đây nhé!',
        services: {
            electricity: '___.000đ đồng / kWh',
            water: '___.000đ đồng / m3',
            bath: 'khép kín, có nóng lạnh',
            kitchen: 'chung',
            airConditioner: 'có',
            balcony: 'có',
            fridge: 'có',
            washingMachine: 'có',
            bed: 'có',
            wardrobe: 'có'
        },
        price: '800.000',
        contactNumber: '123456',
        nearbyLocations: [
            'Smack Dab - Urban Lounge - JW Marriott Hotel Hanoi',
            'Sumo BBQ - Nhà Hàng Thịt Nướng Nhật Bản - Trung Yên',
            'Big C Thăng Long',
            'Villa Ju Bakery'
        ]
    }

    return (
        <div>
            <Navbar/>
            <Slider slides={slides}/>
            <RoomInfo information={information} />
        </div>
    )
}