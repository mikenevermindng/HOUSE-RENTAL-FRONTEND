import React, { useState, useEffect } from 'react'
import { Table, Tooltip, Popconfirm } from 'antd';
import DeleteIcon from '../../../Asset/Icon/trash_can.svg';
import moment from 'moment'
import { Rate } from 'antd';
import { apiGetAllReports, apiDeleteReport } from '../../../Services/report_poster_service'
import { Link } from 'react-router-dom'

function AdminReportManageTable() {

    const [reportList, setReportList] = useState([])

    useEffect(() => {
        const commentListListFetchData = async () => {
            const res = await apiGetAllReports()
            setReportList(res.listReport)
        }
        commentListListFetchData()
    }, [])

    const columns = [
        {
            title: 'ID bài đăng',
            key: 'ID',
            fixed: 'left',
            width: 150,
            ellipsis: true,
            render: (text, record, index) => {
                console.log(record.posterId._id)
                return (
                    <Link to={"/room-details/" + record.posterId._id} target="_blank">
                        <Tooltip title={record.posterId._id}>
                            {record.posterId._id}
                        </Tooltip>
                    </Link>
                )
            }
        },
        {
            title: 'ID người báo cáo',
            dataIndex: 'userReportedId',
            key: 'userReportedId',
            width: 150,
            ellipsis: true,
        },
        {
            title: 'Thời gian',
            width: 150,
            ellipsis: true,
            key: 'time',
            render: (text, record, index) => {
                const { timeReported } = record
                const timeFormated = moment(timeReported).format("HH:MM DD/MM/YYYY")
                return (
                    <Tooltip title={timeFormated}>
                        {timeFormated}
                    </Tooltip>
                )
            },
            sorter: (a, b) => {
                const now = moment.now()
                return moment(a.timeReported).diff(now) - moment(b.timeReported).diff(now)
            }
        },
        {
            title: 'Lý do',
            dataIndex: 'reason',
            key: 'reason',
            ellipsis: true,
            width: 200
        },
        {
            title: 'Đánh giá',
            key: 'rate',
            width: 200,
            render: (text, record, index) => {
                return <Rate defaultValue={record.ratingId.rate} disabled={true} />
            }
        },
        {
            title: 'Lượt like',
            key: 'rate',
            width: 100,
            dataIndex: ['ratingId', 'likedUser', 'length']
        },
        {
            title: 'Lượt xem',
            key: 'rate',
            width: 100,
            dataIndex: ['ratingId', 'visits', 'length']
        },
        {
            title: 'Diện tích',
            key: 'area',
            dataIndex: ['posterId', 'area'],
            width: 100,
        },
        {
            title: 'Giá thuê',
            key: 'pricePerMonth',
            dataIndex: ['posterId', 'pricePerMonth'],
            width: 100,
        },
        {
            title: 'Hành động',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record, index) => (
                <div>
                    <Popconfirm
                        title="Bạn có chắc muốn xoá bình luận này?"
                        okText="Đồng ý"
                        cancelText="Huỷ bỏ"
                        onConfirm={async () => {
                            console.log(record._id)
                            await apiDeleteReport(record._id)
                            const res = await apiGetAllReports()
                            setReportList(res.listReport)
                        }}
                    >
                        <Tooltip title="Xoá bài đăng">
                            <div className="table-icons">
                                <img src={DeleteIcon} alt="delete-icon" />
                            </div>
                        </Tooltip>
                    </Popconfirm>
                </div>
            ),
        },
    ];
    return (
        <div>
            <Table
                columns={columns}
                dataSource={reportList}
                scroll={{ x: 1500, y: 300 }}
                size="small"
                rowKey="_id"
            />
        </div>
    )
}

export default AdminReportManageTable
