import http from './http'

const apiPostReportPoster = async (data) => {
    try {
        const response = await http.post('report/', data, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiGetAllReports = async () => {
    try {
        const response = await http.get('report/', {
            headers: {
                authorization: sessionStorage.getItem('adminToken')
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiDeleteReport = async (reportId) => {
    try {
        const response = await http.delete('report/' + reportId, {
            headers: {
                authorization: sessionStorage.getItem('adminToken')
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export {
    apiPostReportPoster,
    apiGetAllReports,
    apiDeleteReport
}