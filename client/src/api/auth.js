import axios from 'axios'

export const postRegister = async (newUser) => {
    return await axios.post('/api/register', newUser, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const login = async (userInfo) => {
    return await axios.post('/api/login', userInfo, {
        withCredentials: true, 
        headers: {
        "Content-Type": "multipart/form-data"
        }
    })
}

export const logout = async () => {
    return await axios.get('/api/logout', {withCredentials: true})
}

export const getUserInfo = async () => {
    return await axios.get('/api/userInfo')
}