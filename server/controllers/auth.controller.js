import User from '../models/users.model.js'
import Role from '../models/roles.models.js'
import Seller from '../models/seller.models.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'
import { serialize } from 'cookie'

export const getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const signUp = async (req, res) => {
    try {
        // ? Take the constats from the Request body
        const {name, lastname, email, password, confirmPassword, rol} = req.body;

        // ? Confirm if the two passwords are the same
        if(password != confirmPassword) return res.status(500).json('Passwords not matched')
    
        // ? Asign value to the User model
        const newUser =  new User({
            name,
            lastname,
            email,
            password: await User.encryptPassword(password),
            rol
        })

    
        // ? Search the role in the Role model if the role isn't found asign the default role (user)
        if (rol) {
            const foundRoles = await Role.find({name: {$in: rol}})
            newUser.rol = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({name: 'user'})
            newUser.rol = [role._id];
        }
    
        // ? Save the new document user in the database
        const savedUser = await newUser.save()
    
        // ? Create a Json Web Token with the id user, a secret string and duration 
        const token = jwt.sign({id: savedUser._id}, config.SECRET, {
            expiresIn: 60 * 60 * 24 * 30,
        })

        // ? Serialize the token in a cookie adding propieties for security
       const serialized = serialize("session", token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // ? <- The secure propety is for the https if the proyect is in development this propety isn't applied
            sameSite: 'lax'
       })
    
       // ? Add a cookie in the header of the response
        res.setHeader('Set-Cookie', serialized)
        return res.status(200).json({savedUser}) // ? <- Return a status 200 (ok) and information of saved user in a json object
    } catch (error) {
        // ? If an error occurs return a status 500 and the error in  a json object
        return res.status(500).json({message: error})

    }
}

export const signIn = async (req, res) => {
    try {
        console.log(req.body)
        const userFound = await User.findOne({email: req.body.email}).populate("rol")
        if (!userFound) return res.status(400).json({message: 'User not found'})
    
        const matchPass = await User.comparePass(req.body.password, userFound.password)
        if(!matchPass) return res.status(401).json({token: null, message: 'Invalid password'})
    
        const token = jwt.sign({id: userFound._id}, config.SECRET, {
            expiresIn: 60 * 60 * 24 * 30
        })

        const serialized = serialize("session", token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: 'lax'
        })

        res.setHeader('Set-Cookie', serialized)
    
        // ? if the user is a seller return the seller info
        const user_id = userFound._id
        let seller
        const result = await Seller.findOne({user_id: {$in: user_id}})
        if(!result) return res.status(200).json(userFound)
        seller = result
    
        return res.status(200).json({userFound, seller})
    } catch (error) {
        return res.status(500),json({message: error})
    }
}

export const logout = async (req, res) => {
    try {

        //? Serialize a cookie wiithout a json web token and a duration of 0 miliseconds
        const serialized = serialize("session", null, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 0,
          path: "/",
        });

      
        //? When the client receives this cookie, the cookie contained in the browser will be deleted 
        res.setHeader("Set-Cookie", serialized);
        return res.status(200).json({
          message: "Logout successful",
        });
    } catch (error) {
        return res.status(500).json({message: error})
    }
}