import Sales from "../models/sales.models.js";

export const addSale = async (req, res) => {
    try {
        const { product_id, quantity, subtotal, total, seller_id, user_id, status } = req.body
        const newSale = new Sales({product_id, quantity, subtotal, total, seller_id, user_id, status})

        await newSale.save()
        return res.status(200),json(newSale)

    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getSales = async (req, res) => {
    try {
        const sales = await Sales.find().sort({updatedAt: -1})
        if(!sales) return res.status(404).json('No sales found')
        return res.status(200).json(sales)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await Sales.findById(id)
        if(!sale) return res.status(404).json('No sale found')
    } catch (error) {
        return res.status(500).json({message})
    }
}

export const getUserSales = async (req, res) => {
    try {
        const {id} = req.body
        const sales = await Sales.find({user_id: {$in: id}}).sort({updatedAt: -1})

        if(!sales) return res.status(404).json('No sales found')

        return res.status(200).json(sales)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getSellerSales = async (req, res) => {
    try {
        const {id} = req.body
        const sales = await Sales.find({seller_id: {$in: id}}).sort({updatedAt: -1})

        if(!sales) return res.status(404).json('No sales found')

        return res.status(200).json(sales)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const updSales = async (req, res) => {
    try {
        const {id} = req.params
        const updatedSale = await Sales.findByIdAndUpdate(id)

        if(!updatedSale) return res.status(404).json('No sale found')

        return res.status(200).json(updatedSale)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}