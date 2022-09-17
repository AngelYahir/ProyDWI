import Cart from '../models/cart.models.js'

export const getCart = async (req, res) => {
    try {
        const { us_id } = req.body
        const cartItems = await Cart.find({user_id: {$in: us_id}})
        if(!cartItems) return res.status(404).json('No products found')

        return res.status(200).json(cartItems)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const removeCartItem = async (req, res) => {
    try {
        const { user, prod } = req.body
        const removedItems = await Cart.findOneAndDelete({user_id: {$in: user}, product_id: {$in: prod}})

        if(!removedItems) return res.status(404).json('no items found')
        return res.status(200).json(removedItems)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const cleanCart = async (req, res) => {
    try {
        const { user } = req.body
        const deletedCart = await Cart.deleteMany({user_id: {$in: user}})
        if(!deletedCart) return res.status(404).json('Products not found')
        return res.status(200).json(deletedCart)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const addItemCart = async (req, res) => {
    try {
        const { product_id, user_id, quantity } = req.body
        const newItemCart = new Cart({product_id, user_id, quantity})
        await newItemCart.save()

        return res.status(200).json(newItemCart)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}