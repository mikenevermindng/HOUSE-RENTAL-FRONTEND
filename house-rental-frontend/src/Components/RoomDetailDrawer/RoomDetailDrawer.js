import React, {useState} from 'react';
import {Button, Drawer, Tabs} from 'antd';
import MainInfoInput from "./MainInfoInput";
import FacilityInput from "./FacilityInput";
import DescriptionInput from "./DescriptionInput";
import RatingDrawer from "./RatingDrawer";
import EditIcon from "../../Asset/Icon/edit_file.svg";
import DeleteIcon from "../../Asset/Icon/trash_can.svg"

const { TabPane } = Tabs;

function RoomDetailDrawer(props) {
    const [visible, setVisible] = useState(false);
    const [RateVisible, setRateVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const showRate = () => {
        setRateVisible(true);
    }

    const hideRate = () => {
        setRateVisible(false);
    }

    return (
        <>
            <div className="table-icons">
                <img id="edit-icon" src={EditIcon} alt="edit" onClick={showDrawer} style={{width: "20px", height: "20px"}}/>
                <img id="delete-icon" src={DeleteIcon} alt="delete" style={{width: "20px", height: "20px"}}/>
            </div>
            <Drawer
                title="Chỉnh sửa thông tin nơi ở của bạn"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width="44%"
            >
                <div className="detail-container">
                    <Tabs tabPosition="left">
                        <TabPane tab="Thông tin chung" key="1">
                            <MainInfoInput data={props}/>
                            <p onClick={showRate}>Đánh giá</p>
                            <Drawer
                                title="Đánh giá và bình luận"
                                placement="right"
                                closable={false}
                                onClose={hideRate}
                                visible={RateVisible}
                                width="25%"
                            >
                                <RatingDrawer data={props}/>
                            </Drawer>
                        </TabPane>
                        <TabPane tab="Tiện ích" key="2">
                            <FacilityInput data={props}/>
                        </TabPane>
                        <TabPane tab="Mô tả" key="3">
                            <DescriptionInput data={props}/>
                        </TabPane>
                    </Tabs>
                </div>
            </Drawer>
        </>
    );
}

export default RoomDetailDrawer;