import axios from 'axios'

const baseURL = 'http://localhost:4000'

export const postRegister = async (newUser) => {
    return await axios.post(baseURL + '/register', newUser, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const login = async (userInfo) => {
    return await axios.post(baseURL + '/login', userInfo, {
        withCredentials: true, 
        headers: {
        "Content-Type": "multipart/form-data"
        }
    })
}

export const logout = async () => {
    return await axios.get(baseURL + '/logout', {withCredentials: true})
}

export const getUserInfo = async () => {
    return await axios.get(baseURL + '/userInfo')
}