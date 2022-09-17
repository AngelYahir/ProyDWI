import axios from "axios";
const baseURL = 'http://localhost:4000'

export const getProducts = async () => {
    return await axios.get(baseURL + '/products', {withCredentials: true})
}

export const getCategories = async () => {
    return await axios.get(baseURL + '/categories', {withCredentials: true})
}

export const getProduct = async (id) => {
    return await axios.get(baseURL + '/product/' + id, {withCredentials: true})
}