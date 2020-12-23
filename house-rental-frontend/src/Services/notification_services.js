import http from './http'

const adminGetNotification = () => {
    try {
        const res = http.get('/notification/admin')
        return res.data
    } catch (error) {
        return null
    }
}

const ownerGetNotification = () => {
    try {
        const res = http.get('/notification/')
        return res.data
    } catch (error) {
        return null
    }
}

export {
    adminGetNotification,
    ownerGetNotification
}