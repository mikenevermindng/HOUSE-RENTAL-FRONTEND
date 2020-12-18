import React from 'react'
import { Table, Tooltip } from 'antd';

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
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
    },
];

function OwnerAccountTable(props) {

    const { ownerAccountList } = props

    console.log(ownerAccountList)

    return (
        <div>
            <Table
                columns={columns}
                dataSource={ownerAccountList}
                scroll={{ x: 1500, y: 300 }}
                size="small"
            />
        </div>
    )
}

export default OwnerAccountTable
