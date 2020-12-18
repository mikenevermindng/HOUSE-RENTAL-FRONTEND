import React, { useState } from 'react';
import { Table, Tooltip, Tag } from 'antd';
import './StatisticTable.css';
import RoomDetailDrawer from "../RoomDetailDrawer/RoomDetailDrawer";

function StatisticTable(props) {
    const data = props.data;

    //Table Structure
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
            responsive: ['md'],
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
                return first.visited - second.visited;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Lượt thích',
            key: 'likes',
            dataIndex: ['rating', 'likedUser', 'length'],
            responsive: ['md'],
            sorter: (first, second) => {
                return first.likes - second.likes;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Lượt đánh giá',
            key: 'rate',
            dataIndex: ['rating', 'rate'],
            responsive: ['md'],
            sorter: (first, second) => {
                return first.rate - second.rate;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Tình trạng',
            key: 'status',
            dataIndex: 'status',
            render: () => {

            }
        },
        {
            title: '',
            key: 'detail',
            dataIndex: 'detail',
            render: () => (
                <RoomDetailDrawer props={data[0]}/>
            )
        }
    ];

    return (
        <div className="table-container">
            <Table columns={columns} dataSource={data}/>
        </div>
    )
}

export default StatisticTable;