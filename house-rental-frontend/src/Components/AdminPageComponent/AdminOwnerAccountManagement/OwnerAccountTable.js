import React, { useState, useEffect } from 'react'
import { Table, Tooltip, Button, Popconfirm } from 'antd';
import { apiDeleteOwnerAccount, apiUpdateOwnerAccount, apiGetAllOwnerAccount } from '../../../Services/owner_services'
import DeleteIcon from '../../../Asset/Icon/trash_can.svg';
import AcceptIcon from '../../../Asset/Icon/tick_box.svg';

function OwnerAccountTable(props) {


    const [ownerAccountList, setOwnerAccountList] = useState([])

    useEffect(() => {
        const ownerListListFetchData = async () => {
            const res = await apiGetAllOwnerAccount()
            setOwnerAccountList(res.owners)
        }
        ownerListListFetchData()
    }, [])

    const columns = [
        {
            title: 'Họ và tên',
            key: 'name',
            fixed: 'left',
            width: 150,
            ellipsis: true,
            render: (text, record, index) => {
                const name = record.firstName + " " + record.lastName
                return (
                    <Tooltip title={name}>
                        {name}
                    </Tooltip>
                )
            }
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            ellipsis: true,
            width: 150,
            render: (text, record, index) => {
                const { address } = record
                return (
                    <Tooltip title={address}>
                        {address}
                    </Tooltip>
                )
            }
        },
        {
            title: 'Thành phố',
            dataIndex: 'city',
            width: 100,
            ellipsis: true,
            key: 'city',
            render: (text, record, index) => {
                const { city } = record
                return (
                    <Tooltip title={city}>
                        {city}
                    </Tooltip>
                )
            }
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            ellipsis: true,
            render: (text, record, index) => {
                const { email } = record
                return (
                    <Tooltip title={email}>
                        {email}
                    </Tooltip>
                )
            },
            width: 200
        },
        {
            title: 'Tình trạng',
            dataIndex: 'isApproved',
            key: '4',
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
                        title="Bạn có chắc muốn xoá tài khoản này?"
                        okText="Đồng ý"
                        cancelText="Huỷ bỏ"
                        onConfirm={async () => {
                            await apiDeleteOwnerAccount(record._id)
                            const res = await apiGetAllOwnerAccount()
                            setOwnerAccountList(res.owners)
                        }}
                    >
                        <Tooltip title="Xoá bài đăng">
                            <div className="tables-icon">
                                <img src={DeleteIcon} alt="delete-icon"/>
                            </div>
                        </Tooltip>
                    </Popconfirm>


                    {!record.isApproved && (
                        <Popconfirm
                            title="Bạn muốn chấp thuận tài khoản này?"
                            okText="Đồng ý"
                            cancelText="Huỷ bỏ"
                            onConfirm={async () => {
                                apiUpdateOwnerAccount(record._id, { isApproved: true })
                                const res = await apiGetAllOwnerAccount()
                                setOwnerAccountList(res.owners)
                            }}
                        >
                            <Tooltip title="Chấp thuận tài khoản">
                                <div className="tables-icon">
                                    <img src={AcceptIcon} alt="accept-icon"/>
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
                dataSource={ownerAccountList}
                scroll={{ x: 1500, y: 300 }}
                size="small"
                rowKey="_id"
            />
        </div>
    )
}

export default OwnerAccountTable
