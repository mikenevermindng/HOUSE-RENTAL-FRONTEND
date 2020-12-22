import http from './http'

const apiAdminLogin = async (data) => {
    try {
        const res = await http.post('/admin', data)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export {
    apiAdminLogin
}