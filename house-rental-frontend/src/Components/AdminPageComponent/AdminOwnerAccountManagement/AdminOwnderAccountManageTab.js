import React, { useState, useEffect } from 'react'
import OwnerAccountTable from './OwnerAccountTable'
import { apiGetAllOwnerAccount } from '../../../Services/owner_services'

function AdminOwnderAccountManageTab(props) {

    const [ownerAccountList, setOwnerAccountList] = useState([])

    useEffect(() => {
        const ownerListListFetchData = async () => {
            const res = await apiGetAllOwnerAccount()
            setOwnerAccountList(res.owners)
        }
        ownerListListFetchData()
    }, [])

    return (
        <div>
            <OwnerAccountTable ownerAccountList={ownerAccountList} rowKey="_id" />
        </div>
    )
}

export default AdminOwnderAccountManageTab
