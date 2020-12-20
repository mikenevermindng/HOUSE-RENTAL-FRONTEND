import React from 'react'
import { Table, Tooltip } from 'antd';
import moment from 'moment'

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
        key: 'age',
        fixed: 'left',
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
        fixed: 'left',
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
        title: 'Diện tích',
        dataIndex: 'area',
        key: '1',
        sorter: (a, b) => a.area - b.area,
    },
    {
        title: 'Số lượng phòng',
        dataIndex: 'numberOfRoom',
        key: '2',
        sorter: (a, b) => a.numberOfRoom - b.numberOfRoom,
    },
    {
        title: 'Giá theo tháng',
        dataIndex: 'pricePerMonth',
        key: '3',
        sorter: (a, b) => a.pricePerMonth - b.pricePerMonth,
    },
    {
        title: 'Đánh giá',
        dataIndex: ['rating', 'rate'],
        key: '4',
        sorter: (a, b) => a.rating.rate - b.rating.rate,
    },
    {
        title: 'Lượt thích',
        dataIndex: ['rating', 'likedUser', 'length'],
        key: '5',
        sorter: (a, b) => a.rating.likedUser.length - b.rating.likedUser.length,
    },
    {
        title: 'Lượt xem',
        dataIndex: ['rating', 'visits', 'length'],
        key: '6',
        sorter: (a, b) => a.rating.visits.length - b.rating.visits.length,
    },
    {
        title: 'Ngày đăng tải',
        dataIndex: 'postedDate',
        key: '7',
        render: (text, record, index) => `${moment(record.postedDate).format('DD/MM/YYYY')}`,
        sorter: (a, b) => moment(a.postedDate).diff(b.postedDate),
    },
    {
        title: 'Thời gian đăng yêu cầu',
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
        fixed: 'right',
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
        dataIndex: 'detail',
        key: 'detail',
        fixed: 'right'
    },
];

function PosterManageTable(props) {
    const { postersList } = props
    return (
        <div>
            <Table
                columns={columns}
                dataSource={postersList}
                scroll={{ x: 2000, y: 450 }}
                bordered
                size="small"
            />
        </div>
    )
}

export default PosterManageTable
