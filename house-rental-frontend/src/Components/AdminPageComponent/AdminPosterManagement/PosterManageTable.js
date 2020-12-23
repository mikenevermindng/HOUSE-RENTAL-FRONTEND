import React, { useState, useEffect } from 'react'
import { Table, Tooltip } from 'antd';
import moment from 'moment'
import RoomDetailDrawer from "../../RoomDetailDrawer/RoomDetailDrawer";
import { apiGetPoster } from '../../../Services/accommodation_poster_services'


function PosterManageTable(props) {

    const [posterList, setPosterList] = useState([])

    useEffect(() => {
        const posterListFetchData = async () => {
            const res = await apiGetPoster({})
            console.log(res)
            setPosterList(res.posts)
        }
        posterListFetchData()
    }, [])

    const columns = [
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'name',
            fixed: 'left',
            ellipsis: {
                showTitle: false,
            },
            width: 150,
            render: (text, record, index) => {
                return (
                    <Tooltip placement="topLeft" title={text}>
                        {text}
                    </Tooltip>
                )
            }
        },
        {
            title: 'Kiểu bất động sản',
            dataIndex: 'typeOfAccommodation',
            key: 'typeOfAccommodation',
            responsive: ['lg'],
            filters: [
                {
                    text: 'Phòng trọ',
                    value: 'phòng trọ',
                },
                {
                    text: 'Chung cư mini',
                    value: 'chung cư mini',
                },
                {
                    text: 'Nhà nguyên căn',
                    value: 'nhà nguyên căn',
                },
                {
                    text: 'Chung cư nguyên căn',
                    value: 'chung cư nguyên căn',
                },
            ],
            width: 150,
            onFilter: (value, record) => record.typeOfAccommodation.indexOf(value) === 0,
        },
        {
            title: 'Địa chỉ',
            key: 'address',
            responsive: ['lg'],
            width: 150,
            ellipsis: {
                showTitle: false,
            },
            render: (text, record, index) => {
                const { address, subDistrict, district, city } = record
                const addressInDetail = address + ", " + subDistrict + ", " + district + ", " + city
                return (
                    <Tooltip placement="topLeft" title={addressInDetail}>
                        {addressInDetail}
                    </Tooltip>
                )
            }
        },
        {
            title: 'Giá theo tháng',
            dataIndex: 'pricePerMonth',
            responsive: ['md'],
            key: '3',
            sorter: (a, b) => a.pricePerMonth - b.pricePerMonth,
        },
        {
            title: 'Đánh giá',
            responsive: ['md'],
            dataIndex: ['rating', 'rate'],
            key: '4',
            sorter: (a, b) => a.rating.rate - b.rating.rate,
        },
        {
            title: 'Lượt thích',
            responsive: ['md'],
            dataIndex: ['rating', 'likedUser', 'length'],
            key: '5',
            sorter: (a, b) => a.rating.likedUser.length - b.rating.likedUser.length,
        },
        {
            title: 'Lượt xem',
            responsive: ['md'],
            dataIndex: ['rating', 'visits', 'length'],
            key: '6',
            sorter: (a, b) => a.rating.visits.length - b.rating.visits.length,
        },
        {
            title: 'Thời gian đăng yêu cầu',
            responsive: ['md'],
            children: [
                {
                    title: 'Ngày bắt đầu',
                    render: (text, record, index) => {
                        return record.availableDate[0] ? <span>{moment(record.availableDate[0]).format('DD/MM/YYYY')}</span> : ''
                    },
                    sorter: (a, b) => {
                        const now = moment.now()
                        return moment(a.availableDate[0]).diff(now) - moment(b.availableDate[0]).diff(now)
                    }
                },
                {
                    title: 'Ngày gỡ bài',
                    render: (text, record, index) => {
                        return record.availableDate[1] ? <span>{moment(record.availableDate[1]).format('DD/MM/YYYY')}</span> : ''
                    },
                    sorter: (a, b) => {
                        const now = moment.now()
                        return moment(a.availableDate[1]).diff(now) - moment(b.availableDate[1]).diff(now)
                    }
                },
                {
                    title: 'Giá đăng bài',
                    render: (text, record, index) => {
                        const dateDiff = moment(record.availableDate[1]).diff(record.availableDate[0], 'days')
                        const dateDiffFromNow = - moment(record.postedDate).diff(moment.now(), 'days')
                        return record.availableDate[1] && record.availableDate[0] ? <span>{dateDiff * 5000} đồng</span> : <span>{dateDiffFromNow * 5000} đồng</span>
                    },
                    sorter: (a, b) => {
                        const dateDiff1 = moment(a.availableDate[1]).diff(a.availableDate[0], 'days')
                        const dateDiff2 = moment(b.availableDate[1]).diff(b.availableDate[0], 'days')
                        return dateDiff1 - dateDiff2
                    }
                }
            ]
        },
        {
            title: 'Tình trạng',
            dataIndex: 'isApproved',
            render: (text, record, index) => record.isApproved ? "Đã chấp thuận" : "Chờ chấp thuận",
            filters: [
                {
                    text: 'Đã chấp thuận',
                    value: true,
                },
                {
                    text: 'Chờ chấp thuận',
                    value: false,
                },
            ],
            onFilter: (value, record) => record.isApproved === value,

        },
        {
            title: '',
            key: 'operation',
            fixed: 'right',
            render: (text, record, index) => <RoomDetailDrawer props={record} setPosterList={setPosterList} ratingId={record.rating._id} />,
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={posterList}
                scroll={{ x: 2000, y: 450 }}
                bordered
                size="small"
                rowKey="_id"
            />
        </div>
    )
}

export default PosterManageTable
