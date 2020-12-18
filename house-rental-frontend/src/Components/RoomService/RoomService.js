import React from 'react';
import './RoomService.css';
import ElecIcon from '../../Asset/Icon/light.svg';
import WaterIcon from '../../Asset/Icon/water.svg';
import BathIcon from '../../Asset/Icon/bath.svg';
import KitIcon from '../../Asset/Icon/kitchen.svg';
import ACIcon from '../../Asset/Icon/air-con.svg';
import BalconyIcon from '../../Asset/Icon/balcony.svg';
import FridgeIcon from '../../Asset/Icon/fridge.svg';
import WashIcon from '../../Asset/Icon/wash-mach.svg';
import BedIcon from '../../Asset/Icon/bed.svg';
import DrobeIcon from '../../Asset/Icon/wardrobe.svg';

function RoomService(props) {
    const { services } = props.roomInfo;

    console.log(services)

    return (
        <div className="room-services">
            <h1>Dịch vụ</h1>
            <div className="service-container">

                <div className="left-services">

                    <div className="service">
                        <img src={ElecIcon} alt="light icon" className="service-icon" />
                        <div className="service-info">
                            tiền điện: {services.electricityPrice} đồng/số/tháng
                        </div>
                    </div>

                    <div className="service">
                        <img src={WaterIcon} alt="water icon" className="service-icon" />
                        <div className="service-info">
                            tiền nước: {services.domesticWaterPrice} đồng/số/tháng
                        </div>
                    </div>

                    <div className="service">
                        <img src={BathIcon} alt="bath icon" className="service-icon" />
                        <div className="service-info">
                            phòng tắm: {services.bathroom}
                        </div>
                    </div>

                    <div className="service">
                        <img src={KitIcon} alt="kitchen icon" className="service-icon" />
                        <div className="service-info">
                            bếp: {services.kitchen}
                        </div>
                    </div>

                    <div className="service">
                        <img src={ACIcon} alt="air conditioner icon" className="service-icon" />
                        <div className="service-info">
                            điều hoà: {services.airConditioner ? 'có' : 'không'}
                        </div>
                    </div>

                </div>

                <div className="right-services">

                    <div className="service">
                        <img src={BalconyIcon} alt="balcony icon" className="service-icon" />
                        <div className="service-info">
                            ban công: {services.balcony ? 'có' : 'không'}
                        </div>
                    </div>

                    <div className="service">
                        <img src={FridgeIcon} alt="fridge icon" className="service-icon" />
                        <div className="service-info">
                            tủ lạnh: {services.fridge ? 'có' : 'không'}
                        </div>
                    </div>

                    <div className="service">
                        <img src={WashIcon} alt="washing machine icon" className="service-icon" />
                        <div className="service-info">
                            máy giặt: {services.washingMachine ? 'có' : 'không'}
                        </div>
                    </div>

                    <div className="service">
                        <img src={BedIcon} alt="bed icon" className="service-icon" />
                        <div className="service-info">
                            giường: {services.bed ? 'có' : 'không'}
                        </div>
                    </div>

                    <div className="service">
                        <img src={DrobeIcon} alt="wardrobe icon" className="service-icon" />
                        <div className="service-info">
                            tủ: {services.wardrobe ? 'có' : 'không'}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RoomService;