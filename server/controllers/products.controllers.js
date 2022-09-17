import Products from '../models/products.models.js'
import Category from '../models/categories.models.js'
import Opinion from '../models/opinons.models.js'
import { deleteImage, uploadImage } from '../libs/cloudinary.js'
import fs from 'fs-extra';

// ? Products controllers
export const getProds = async (req, res) => {
    try {
        const products = await Products.find().populate('category').sort({updatedAt: -1})
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Products.findById(id)

        if(!product) return res.status(404).json('No product found')

        return res.status(200).json(product)

    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const addProd = async (req, res) => {
    try {
        const { name, category, description, price, stock, seller } = req.body

        let images;

        if(req.files.images){
            const result = await uploadImage(req.files.images.tempFilePath)
            await fs.remove(req.files.images.tempFilePath)
            images = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }

        const newProduct = new Products({ name, category, description, price, stock, images, seller })

        if(category) {
            const foundCats = await Category.find({name: {$in: category}})
            newProduct.category = foundCats.map(cats => cats._id)
        }

        await newProduct.save()
        return res.status(200).json(newProduct)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error})
    }
}

export const updProd = async (req, res) => {
    try {
        const { id } = req.params

        if (req.files?.images) {
            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            // add the new image to the req.body
            req.body.images = {
              url: result.secure_url,
              public_id: result.public_id,
            };
          }

        const updatedProduct = await Products.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true, }
        )

        return res.status(200).json(updatedProduct)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const dltProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Products.findByIdAndDelete(id)

        if(product.images.public_id){
            await deleteImage(product.images.public_id)
        }

        if(!product) return res.status(404).json('No product found')

        return res.status(204).json('Product deleted')
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getUserProds = async (req, res) => {

    try {
        const userProducts = await Products.find({seller: {$in: req.body.id}})

        if(!userProducts) return res.status(404).json('No products found')
        return res.status(200).json(userProducts)
    } catch (error) {
        return res.statud(500).json({message: error})
    }
}

// ? Categories controllers
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({updatedAt: -1})

        return res.status(200).json(categories)

    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const addCategory = async (req, res) => {
    try {
        const { name } = req.body
        let img;
        if(req.files.img){
            const result = await uploadImage(req.files.img.tempFilePath)
            await fs.remove(req.files.img.tempFilePath)
            img = {
                url: result.secure_url,
                public_id: result.public_id
            }

        }
        const newCategory = new Category({name, img})

        await newCategory.save()
        return res.status(200).json(newCategory)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const updCategory = async (req, res) => {
    try {
        const { id } = req.params

        if (req.files?.img) {
            const result = await uploadImage(req.files.img.tempFilePath);
            await fs.remove(req.files.img.tempFilePath);
            // add the new image to the req.body
            req.body.img = {
              url: result.secure_url,
              public_id: result.public_id,
            };
        }

        const updatedCategory = await Category.findByIdAndUpdate(id, {$set: req.body}, {new: true})

        return res.status(200).json(updatedCategory)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const dltCategory = async (req, res) => {
    try {
        
        const { id } = req.params
        const deletedCategory = await Category.findByIdAndDelete(id)

        if(!deletedCategory) return res.status(404).json('No category found')

        if(deletedCategory.img.public_id){
            await deleteImage(deletedCategory.img.public_id)
        }

        return res.status(200).json(deletedCategory)

    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getProdByCat = async (req, res) => {
    try {
        const { id } = req.params
        const products = await Products.find({category: {$in: id}}).sort({updatedAt: -1})
        if(!products) return res.status(404).json('No products found')

        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

// ? Opinion controllers
export const addOpinion = async (req, res) => {
    try {
        const { user_id, score, comment, product_id } = req.body
        const newOpinion = new Opinion({user_id, score, comment, product_id})

        await newOpinion.save()

        return res.status(200).json(newOpinion)

    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const dltOpinion = async (req, res) => {
    try {
        
        const { id } = req.params
        const deletedOpinion = await Opinion.findByIdAndDelete(id)

        if(!deletedOpinion) return res.status(404).json('No opinion found')

        return res.status(200).json(deletedOpinion)

    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getOpinions = async (req, res) => {
    try {
        const opinions = await Opinion.find().sort({updatedAt: -1})
        if(!opinions) return res.status(404).json('No opinions found')

        return res.status(200).json(opinions)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getProdOpinion = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Products.findById(id).sort({updatedAt: -1})
        if(!product) return res.status(404).json('No products found')
        
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getOpinionProd = async (req, res) => {
    try {
        const { id } = req.params
        const opinions = await Opinion.find({product_id: {$in: id}})
        if(!opinions) return res.status(404).json('No opinion found')

        return res.status(200).json(opinions)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}