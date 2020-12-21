import http from './http'

const apiOwnerLogin = async (data) => {
    try {
        const res = await http.post('owner/login', data)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiOwnerRegister = async (data) => {
    try {
        const res = await http.post('owner/register', data)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiDeleteOwnerAccount = async (ownerId) => {
    try {
        const res = await http.post('owner/' + ownerId, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiUpdateOwnerAccount = async (ownerId, data) => {
    try {
        const res = await http.put('owner/' + ownerId, data)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiGetAllOwnerAccount = async () => {
    try {
        const res = await http.get('owner/', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data
    } catch (error) {
        return []
    }
}

const apiGetOwnerAccount = async (ownerId) => {
    try {
        const res = await http.get('owner/' + ownerId, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data
    } catch (error) {
        return null
    }
}

export {
    apiOwnerLogin,
    apiOwnerRegister,
    apiDeleteOwnerAccount,
    apiUpdateOwnerAccount,
    apiGetAllOwnerAccount,
    apiGetOwnerAccount
}