import axios from 'axios'

const createChatbox = async () => {
    try {
        const res = await axios({
            method: "post",
            url: "http://localhost:3002/createChatbox",
            headers: {
                authorization: localStorage.getItem('ownerToken')
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export {
    createChatbox
}