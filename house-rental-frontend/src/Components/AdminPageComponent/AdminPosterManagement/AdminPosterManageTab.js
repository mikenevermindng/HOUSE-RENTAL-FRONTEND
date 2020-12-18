import React, { useState, useEffect } from 'react'
import PosterManageTable from './PosterManageTable'
import { apiGetPoster } from '../../../Services/accommodation_poster_services'

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

    return (
        <div>
            <PosterManageTable postersList={posterList} />
        </div>
    )
}

export default AdminPosterManageTab
