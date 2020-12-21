import React, { useEffect, useState } from 'react'
import { Table, Button, message, Popconfirm } from 'antd';
import moment from 'moment'
import {
    apiDeleteRentalRequest,
    apiGetRentalRequestByOwnderId
} from '../../Services/rental_request_services'
import { useDispatch } from 'react-redux'
import { openLoginPopup } from '../../Store/ActionCreator/showLoginPopupActionCreator'



function OwnerRentalRequestTable(props) {

    const { ownerId } = props

    const [rentalRequests, setRentalRequest] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDataAsync = async () => {
            const rentalRequest = await apiGetRentalRequestByOwnderId(ownerId)
            if (rentalRequest) {
                setRentalRequest(rentalRequest.requests)
            } else {
                message.error("Vui lòng đăng nhập")
                dispatch(openLoginPopup())
            }
        }
        fetchDataAsync()
    }, [])

    const handlerDelete = async (recordId) => {
        const res = await apiDeleteRentalRequest(recordId)
        if (res) {
            message.success("Xóa thành công")
            const rentalRequest = await apiGetRentalRequestByOwnderId(ownerId)
            setRentalRequest(rentalRequest.requests)
        } else {
            message.error("Xóa thất bại")
            dispatch(openLoginPopup())
        }
    }

    const deleteButton = (recordId) => {
        return (
            <Popconfirm
                title="Title"
                onConfirm={() => handlerDelete(recordId)}
            >
                <Button type="outline" danger>Xóa</Button>
            </Popconfirm>
        )
    }


    const columns = [
        {
            title: 'Người dùng',
            dataIndex: ['userId', 'username'],
            key: 'username',
        },
        {
            title: 'Bài đăng',
            dataIndex: ['posterId', 'title'],
            key: 'age',
        },
        {
            title: 'Đã gửi yêu cầu vào',
            render: (text, record, index) => moment(text).format('DD-MM-YYYY hh:mm'),
            key: 'requiredAt',
        },
        {
            title: 'Số lượng người',
            dataIndex: 'numberOfPeople',
            key: 'numberOfPeople',
        },
        {
            title: 'Liên hệ',
            dataIndex: ['userId', 'phoneNumber'],
            key: 'phoneNumber',
        },
        {
            title: 'email',
            dataIndex: ['userId', 'email'],
            key: 'email',
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (text, record, index) => deleteButton(record._id)
        }
    ]

    return (
        <div>
            <Table columns={columns} dataSource={rentalRequests} rowKey="_id" />
        </div>
    )
}

export default OwnerRentalRequestTable
