import React, { useState, useEffect } from 'react'
import { Table, Tooltip, Popconfirm } from 'antd';
import DeleteIcon from '../../../Asset/Icon/trash_can.svg';
import AcceptIcon from '../../../Asset/Icon/tick_box.svg';
import { apiDeleteComment, apiApprovedComment, apiGetAllCommet } from '../../../Services/comment_services'
import moment from 'moment'
import { Rate } from 'antd';
import { Link } from 'react-router-dom'

function AdminCommentManageTable() {

    const [comments, setComments] = useState('')

    useEffect(() => {
        const commentListListFetchData = async () => {
            const res = await apiGetAllCommet()
            setComments(res.comment)
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
                return (

                    <Link to={"/room-details/" + record.postId} target="_blank">
                        <Tooltip title={record.postId} >
                            {record.postId}
                        </Tooltip>
                    </Link >

                )
            }
        },
        {
            title: 'Người bình luận',
            dataIndex: 'username',
            key: 'address',
            width: 150,
            ellipsis: true,
        },
        {
            title: 'Thời gian',
            width: 100,
            ellipsis: true,
            key: 'city',
            render: (text, record, index) => {
                const { time } = record
                const timeFormated = moment(time).format("HH:MM DD/MM/YYYY")
                return (
                    <Tooltip title={timeFormated}>
                        {timeFormated}
                    </Tooltip>
                )
            }
        },
        {
            title: 'Đánh giá',
            dataIndex: 'stars',
            key: 'stars',
            width: 150,
            render: (text, record, index) => {
                return <Rate defaultValue={text} disabled={true} />
            }

        },
        {
            title: 'Bình luận',
            dataIndex: 'comment',
            key: 'comment',
            ellipsis: true,
            width: 200
        },
        {
            title: 'Tình trạng',
            dataIndex: 'isApproved',
            key: 'isApproved',
            render: (text, record, index) => {
                return record.isApproved ? "Đã phê duyệt" : "Chờ phê duyệt"
            },
            width: 150
        },
        {
            title: '',
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
                            await apiDeleteComment(record._id)
                            const res = await apiGetAllCommet()
                            setComments(res.comment)
                        }}
                    >
                        <Tooltip title="Xoá bài đăng">
                            <div className="table-icons">
                                <img src={DeleteIcon} alt="delete-icon" />
                            </div>
                        </Tooltip>
                    </Popconfirm>


                    {!record.isApproved && (
                        <Popconfirm
                            title="Bạn muốn chấp thuận tài khoản này?"
                            okText="Đồng ý"
                            cancelText="Huỷ bỏ"
                            onConfirm={async () => {
                                apiApprovedComment(record._id, { isApproved: true })
                                const res = await apiGetAllCommet()
                                setComments(res.comment)
                            }}
                        >
                            <Tooltip title="Chấp thuận tài khoản">
                                <div className="table-icons">
                                    <img src={AcceptIcon} alt="accept-icon" />
                                </div>
                            </Tooltip>
                        </Popconfirm>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={comments}
                scroll={{ x: 1500, y: 300 }}
                size="small"
                rowKey="_id"
            />
        </div>
    )
}

export default AdminCommentManageTable
