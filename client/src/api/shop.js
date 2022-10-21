import axios from "axios";
const baseURL = 'https://4000-angelyahir-proydwi-w4lqixwf75x.ws-us72.gitpod.io'

export const getProducts = async () => {
    return await axios.get(baseURL + '/products', {withCredentials: true})
}

export const getCategories = async () => {
    return await axios.get(baseURL + '/categories', {withCredentials: true})
}

export const getProduct = async (id) => {
    return await axios.get(baseURL + '/product/' + id, {withCredentials: true})
}