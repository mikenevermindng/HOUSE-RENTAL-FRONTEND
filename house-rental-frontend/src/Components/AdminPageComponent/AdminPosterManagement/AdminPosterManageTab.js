import React, { useState, useEffect } from 'react'
import PosterManageTable from './PosterManageTable'
import { apiGetPoster } from '../../../Services/accommodation_poster_services'

function AdminPosterManageTab() {
    return (
        <div>
            <PosterManageTable />
        </div>
    )
}

export default AdminPosterManageTab
