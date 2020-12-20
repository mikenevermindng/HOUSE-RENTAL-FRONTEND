import React, { useState, useEffect } from 'react'
import PosterManageTable from './PosterManageTable'
import { apiGetPoster } from '../../../Services/accommodation_poster_services'
import RoomDetailDrawer from "../../RoomDetailDrawer/RoomDetailDrawer";

function AdminPosterManageTab() {

    const [posterList, setPosterList] = useState([])

    useEffect(() => {
        const posterListFetchData = async () => {
            const res = await apiGetPoster({})
            console.log(res)
            setPosterList(res.posts)
        }
        posterListFetchData()
    }, [])

    const data = posterList.map(post => {
        return {
            ...post,
            detail: <RoomDetailDrawer props={post}/>
        }
    })

    return (
        <div>
            <PosterManageTable postersList={data} />
        </div>
    )
}

export default AdminPosterManageTab
