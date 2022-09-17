import User from "../models/users.model.js";
import Seller from '../models/seller.models.js'
import Products from "../models/products.models.js";
import nodemailer from 'nodemailer';

// ? User controllers

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({updatedAt: -1})
        if(!users) return res.status(404).json('No users found')

        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const updUser = async (req, res) => {
    try {
        const { id } = req.params

        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })

        if(!updatedUser) return res.status(404).json('No user found')

        return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const dltUser = async (req, res) => {
    try {
        const { id } = req.params
        const deletedUser = User.findByIdAndDelete(id)
        if(!deletedUser) return res.status(404).json('No user found')
        return res.status(200).json(deletedUser)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

// ? Seller controllers
export const getSellers = async (req, res) => {
    try {
        const sellers = await Seller.find().sort({updatedAt: -1})
        if(!sellers) return res.status(404).json('No users found')

        return res.status(200).json(sellers)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const getSeller = async (req, res) => {
    try {
        const { id } = req.params
        const seller = await Seller.findById(id)
        if(!seller) return res.status(404).json('No users found')

        return res.status(200).json(seller)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}


export const updSeller = async (req, res) => {
    try {
        const { id } = req.params

        if (req.files?.profileImg) {
            const result = await uploadImage(req.files.profileImg.tempFilePath);
            await fs.remove(req.files.profileImg.tempFilePath);
            // add the new image to the req.body
            req.body.profileImg = {
              url: result.secure_url,
              public_id: result.public_id,
            };
        }


        const updatedSeller = await Seller.findByIdAndUpdate(id, {$set: req.body}, {new: true})
    
        if(!updatedSeller) return res.status(404).json('No user found')
    
        return res.status(200).json(updatedSeller)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}


export const addSeller = async (req, res) => {
    try {

        const { sellerName, user_id, ofSeller } = req.body
        let profileImg;
        if(req.files.profileImg){
            const result = await uploadImage(req.files.profileImg.tempFilePath)
            await fs.remove(req.files.profileImg.tempFilePath)
            profileImg = {
                url: result.secure_url,
                public_id: result.public_id
            }

        }
        const newSeller = new Seller({sellerName, profileImg, user_id, ofSeller})
        await newSeller.save()
        return res.status(200).json(newSeller)

    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const dltSeller = async (req, res) => {
    try {
        const { id } = req.params
        const deletedSeller = await Seller.findByIdAndDelete(id)
        if(!deletedSeller) return res.status(404).json('No seller found')

        if(deletedSeller.profileImg.public_id){
            await deleteImage(deletedSeller.profileImg.public_id)
        }

        return res.status(200).json(deletedSeller)
    } catch (error) {
        return res.statuss(500).json({message: error})
    }
}

export const getUserProds = async (req, res) => {
    try {
        const { seller } = req.body
        const products = await Products.find({seller: {$in: seller}}).sort({updatedAt: -1})
        
        if(!products) return res.status(404).json('No products found')

        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

// ?  Mail controllers

export const sendMail = async (req, res) => {
    try {
        const {name, email, message} = req.body
        const contentHTML=`
            <h1>Informacion del usuario</h1>
            <ul>
                <li>Nombre: ${name}</li>
                <li>Correo Electronico: ${email}</li>
            </ul>
            <h2>Problema</h2>
            <p>${message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'danyka4@ethereal.email',
                pass: '15QEkryekCe9GJCjKv'
            }
        });

        let info = await transporter.sendMail({
            from: '"G - Market Server 🛒" <servicios@g.market.mx>', // sender address
            to: "angel_torres0227@proton.me", // list of receivers
            subject: "Hola 😊", // Subject line
            // text: "Hello world?", // plain text body
            html: contentHTML, // html body
        });

        return res.status(200).json(nodemailer.getTestMessageUrl(info))

    } catch (error) {
        return res.status(500).json({message: error})
    }
}