import http from './http'

const apiGenerateRentalRequest = async (ownerId, posterId, numberOfPeople) => {
    try {
        const data = {
            ownerId: ownerId,
            posterId: posterId,
            numberOfPeople: numberOfPeople
        }
        const res = await http.post('/rental-request/', { ...data }, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiGetAllRentalRequest = async () => {
    try {
        const response = await http.get('rental-request/', {
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

const apiGetRentalRequestByOwnderId = async (ownerId) => {
    try {
        const response = await http.get('rental-request/ownerRequest', {
            headers: {
                authorization: localStorage.getItem('ownerToken')
            }
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const apiDeleteRentalRequest = async (rentalId) => {
    try {
        const response = await http.delete('rental-request/' + rentalId, {
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

export {
    apiGenerateRentalRequest,
    apiGetAllRentalRequest,
    apiGetRentalRequestByOwnderId,
    apiDeleteRentalRequest
}