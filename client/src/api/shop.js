import axios from "axios";

export const getProducts = async () => {
    return await axios.get('/api/products', {withCredentials: true})
}

export const getCategories = async () => {
    return await axios.get('/api/categories', {withCredentials: true})
}

export const getProduct = async (id) => {
    return await axios.get('/api/product/' + id, {withCredentials: true})
}

export const addOpinion = async (data) => {
    return await axios.post('/api/opinions', data)
}

export const getOpinions = async (id) => {
    return await axios.get('/api/product/opinions/'+id)
}