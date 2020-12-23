import http from './http'

const adminGetNotification = async () => {
    try {
        const res = await http.get('/notification/admin', {
            headers: {
                authorization: sessionStorage.getItem('adminToken')
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const ownerGetNotification = async () => {
    try {
        const res = await http.get('/notification/', {
            headers: {
                authorization: sessionStorage.getItem('ownerToken')
            }
        })
        return res.data
    } catch (error) {
        return null
    }
}

export {
    adminGetNotification,
    ownerGetNotification
}