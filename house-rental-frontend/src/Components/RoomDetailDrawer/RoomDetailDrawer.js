import React, { useState } from 'react';
import { Drawer, Tabs, Tooltip, Popconfirm, Button, message } from 'antd';
import MainInfoInput from "./MainInfoInput";
import FacilityInput from "./FacilityInput";
import DescriptionInput from "./DescriptionInput";
import RatingDrawer from "./RatingDrawer";
import './RoomDetailDrawer.css';
import ViewsIcon from "../../Asset/Icon/views.svg";
import FavsIcon from "../../Asset/Icon/likes.svg";
import RatesIcon from "../../Asset/Icon/rates.svg";
import { apiGetPoster, apiDeletePoster, apiApprovedPoster } from '../../Services/accommodation_poster_services'

const { TabPane } = Tabs;

function RoomDetailDrawer(props) {

    const { ownerId, setPosterList } = props
    const ratingId = props.props.rating._id
    const posterId = props.props._id
    const isApproved = props.props.isApproved

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

    const approvePosterHandler = async (posterId) => {
        const updated = await apiApprovedPoster(posterId, {
            posterChangeInfomation: {
                isApproved: true
            },
            materialFacilitiesChangeInfomation: {}
        })
        if (updated) {
            if (ownerId) {
                const posters = await apiGetPoster({ ownerId: ownerId })
                setPosterList(posters.posts)
            } else {
                const posters = await apiGetPoster({ ownerId: ownerId })
                setPosterList(posters.posts)
            }
            message.success("Chấp thuận bài viết thành công")
        } else {
            message.error("Chấp thuận bài viết thất bại")
        }
    }

    const deletePosterHandler = async (posterId) => {
        const deleted = await apiDeletePoster(posterId)
        if (deleted) {
            if (ownerId) {
                const posters = await apiGetPoster({ ownerId: ownerId })
                setPosterList(posters.posts)
            } else {
                const posters = await apiGetPoster({ ownerId: ownerId })
                setPosterList(posters.posts)
            }
            message.success("Xóa bài viết thành công")
        } else {
            message.error("Xóa bài viết thất bại")
        }
    }

    return (
        <>
            <div className="table-icons">
                <Tooltip title="Chỉnh sửa bài đăng">
                    <Button type="outline" onClick={showDrawer}>Xem</Button>
                </Tooltip>
                {!isApproved && <Popconfirm
                    title="Bạn có chắc muốn chấp thuận bài đăng này?"
                    okText="Đồng ý"
                    cancelText="Huỷ bỏ"
                    onConfirm={() => approvePosterHandler(posterId)}
                >
                    <Tooltip title="Chấp thuận bài viết">
                        <Button type="outline">Chấp thuận</Button>
                    </Tooltip>
                </Popconfirm>}
                <Popconfirm
                    title="Bạn có chắc muốn xoá bài đăng này?"
                    okText="Đồng ý"
                    cancelText="Huỷ bỏ"
                    onConfirm={() => deletePosterHandler(posterId)}
                >
                    <Tooltip title="Xoá bài đăng">
                        <Button type="outline" danger>Xóa</Button>
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
                                <RatingDrawer posterId={posterId} ratingId={ratingId} />
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