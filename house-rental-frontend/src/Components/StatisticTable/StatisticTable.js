import React, { useEffect, useState } from 'react';
import { Table, Tooltip, Tag, message } from 'antd';
import './StatisticTable.css';
import RoomDetailDrawer from "../RoomDetailDrawer/RoomDetailDrawer";
import { useDispatch } from 'react-redux'
import { openLoginPopup } from '../../Store/ActionCreator/showLoginPopupActionCreator'
import { aptGetPosterByOwnerId, apiUpdatePosterStatus } from '../../Services/accommodation_poster_services'

function StatisticTable(props) {
    const { ownerId } = props

    const [posterData, setPosterData] = useState([])

    useEffect(() => {
        const fetchDataAsync = async () => {
            const res = await aptGetPosterByOwnerId(ownerId)
            if (res) {
                setPosterData(res.posts)
            } else {
                message.error("Vui lòng đăng nhập")
            }
        }
        fetchDataAsync()
    }, [])

    const updateStatusHandler = async (posterId, status) => {
        const updateStatus = status === 'available' ? 'rented' : 'available'
        const res = await apiUpdatePosterStatus(posterId, updateStatus)
        if (res) {
            if (res) {
                const response = await aptGetPosterByOwnerId(ownerId)
                setPosterData(response.posts)
            } else {
                message.error("Vui lòng đăng nhập")
            }
        } else {
            message.error("Cập nhật thất bại")
        }
    }

    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'title',
            key: 'title',
            ellipsis: {
                showTitle: false
            },
            sorter: (first, second) => {
                return first.title.toLowerCase().charCodeAt(0) - second.title.toLowerCase().charCodeAt(0);
            },
            sortDirections: ['descend', 'ascend'],
            render: title => (
                <Tooltip placement="topLeft" title={title}>
                    {title}
                </Tooltip>
            )
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            responsive: ['lg'],
            ellipsis: {
                showTitle: false
            },
            sorter: (first, second) => {
                return first.address.toLowerCase().charCodeAt(0) - second.address.toLowerCase().charCodeAt(0);
            },
            sortDirections: ['descend', 'ascend'],
            render: address => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            )
        },
        {
            title: 'Lượt xem',
            key: 'visited',
            dataIndex: ['rating', 'visits', 'length'],
            responsive: ['md'],
            sorter: (first, second) => {
                return first.rating.visits.length - second.rating.visits.length;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Lượt thích',
            key: 'likes',
            dataIndex: ['rating', 'likedUser', 'length'],
            responsive: ['md'],
            sorter: (first, second) => {
                return first.rating.likedUser.length - second.rating.likedUser.length;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Lượt đánh giá',
            key: 'rate',
            dataIndex: ['rating', 'rate'],
            responsive: ['md'],
            sorter: (first, second) => {
                return first.rating.rate - second.rating.rate;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Tình trạng',
            key: 'status',
            dataIndex: 'status',
            responsive: ['md'],
            render: (text, record, index) => (
                <Tag color="#65F659" onClick={() => updateStatusHandler(record._id, text)}> {text}</Tag >
            )
        },
        {
            title: 'Action',
            key: 'detail',
            render: (text, record, index) => <RoomDetailDrawer props={record} ownerId={ownerId} setPosterList={setPosterData} />
        }
    ];

    return (
        <div className="table-container">
            <Table columns={columns} dataSource={posterData} rowKey="_id" />
        </div>
    )
}

export default StatisticTable;