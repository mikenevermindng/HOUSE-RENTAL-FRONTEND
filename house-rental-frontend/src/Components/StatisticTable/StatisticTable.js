import React from 'react';
import { Table, Tooltip } from 'antd';
import './StatisticTable.css';

function StatisticTable(props) {
    const data = props.data;

    //Table Structure
    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'roomName',
            key: 'roomName',
            ellipsis: {
                showTitle: false
            },
            sorter: (first, second) => {
                return first.roomName.toLowerCase().charCodeAt(0) - second.roomName.toLowerCase().charCodeAt(0);
            },
            sortDirections: ['descend', 'ascend'],
            render: name => (
                <Tooltip placement="topLeft" title={name}>
                    {name}
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
            key: 'views',
            dataIndex: 'views',
            responsive: ['md'],
            sorter: (first, second) => {
                return first.views - second.views;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Lượt thích',
            key: 'favorites',
            dataIndex: 'favorites',
            responsive: ['md'],
            sorter: (first, second) => {
                return first.views - second.views;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Lượt đánh giá',
            key: 'ratings',
            dataIndex: 'ratings',
            responsive: ['md'],
            sorter: (first, second) => {
                return first.views - second.views;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Tình trạng',
            key: 'status',
            dataIndex: 'status'
        },
        {
            title: '',
            key: 'detail',
            dataIndex: 'detail'
        }
    ];

    return (
        <div className="table-container">
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default StatisticTable;