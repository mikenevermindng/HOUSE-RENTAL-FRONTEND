import React, { useState } from 'react';
import { Drawer, Tabs, Tooltip, Popconfirm } from 'antd';
import MainInfoInput from "./MainInfoInput";
import FacilityInput from "./FacilityInput";
import DescriptionInput from "./DescriptionInput";
import RatingDrawer from "./RatingDrawer";
import EditIcon from "../../Asset/Icon/edit_file.svg";
import DeleteIcon from "../../Asset/Icon/trash_can.svg"
import './RoomDetailDrawer.css';
import ViewsIcon from "../../Asset/Icon/views.svg";
import FavsIcon from "../../Asset/Icon/likes.svg";
import RatesIcon from "../../Asset/Icon/rates.svg";

const { TabPane } = Tabs;

function RoomDetailDrawer(props) {

    const { ownerId } = props
    const posterId = props.props._id

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
                <Tooltip title="Chỉnh sửa bài đăng">
                    <img id="edit-icon" src={EditIcon} alt="edit" onClick={showDrawer} />
                </Tooltip>
                <Popconfirm
                    title="Bạn có chắc muốn xoá bài đăng này?"
                    okText="Đồng ý"
                    cancelText="Huỷ bỏ"
                >
                    <Tooltip title="Xoá bài đăng">
                        <img id="delete-icon" src={DeleteIcon} alt="delete" />
                    </Tooltip>
                </Popconfirm>
            </div>
            <Drawer
                title="Chỉnh sửa thông tin nơi ở của bạn"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width="50%"
            >
                <div className="detail-container">
                    <Tabs tabPosition="left">
                        <TabPane tab="Thông tin" key="1">

                            <div className="views-favs-rates">
                                <div className="interaction-info">
                                    <img src={ViewsIcon} className="info-icon" alt="views" />
                                    <span className="info-text">{props.props.rating.visits.length}</span>
                                </div>

                                <div className="interaction-info">
                                    <img src={FavsIcon} className="info-icon" alt="favorites" />
                                    <span className="info-text">{props.props.rating.likedUser.length}</span>
                                </div>

                                <div className="interaction-info" onClick={showRate}>
                                    <img src={RatesIcon} className="info-icon" alt="rates" />
                                    <span className="info-text">{props.props.rating.rate}</span>
                                </div>
                            </div>

                            <MainInfoInput data={props} ownerId={ownerId} />
                            <Drawer
                                title="Đánh giá và bình luận"
                                placement="right"
                                closable={false}
                                onClose={hideRate}
                                visible={RateVisible}
                                width="25%"
                            >
                                <RatingDrawer data={props} />
                            </Drawer>
                        </TabPane>
                        <TabPane tab="Tiện ích" key="2">
                            <FacilityInput data={props} ownerId={ownerId} posterId={posterId} />
                        </TabPane>
                        <TabPane tab="Mô tả" key="3">
                            <DescriptionInput data={props} ownerId={ownerId} posterId={posterId} />
                        </TabPane>
                    </Tabs>
                </div>
            </Drawer>
        </>
    );
}

export default RoomDetailDrawer;