import http from './http'

const apiGenerateRentalRequest = async (userId, ownerId, posterId, numberOfPeople) => {
    try {
        const reqBody = { userId, ownerId, posterId, numberOfPeople }
        const res = await http.post('/rental-request/', reqBody)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiGetAllRentalRequest = async () => {
    try {
        const response = await http.get('/rental-request/')
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiGetRentalRequestByOwnderId = async (ownerId) => {
    try {
        const response = await http.get('/rental-request/' + ownerId)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export {
    apiGenerateRentalRequest,
    apiGetAllRentalRequest,
    apiGetRentalRequestByOwnderId
}