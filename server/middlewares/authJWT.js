import jwt from 'jsonwebtoken'
import config from '../config.js'
import User from '../models/users.model.js';
import Role from '../models/roles.models.js'
import Seller from '../models/seller.models.js';

export const verifyToken = async (req, res, next) => {
    try{
        const {session} = req.cookies;
        if(!session) return res.status(403).json({message: 'No token provided'})
    
        const decoded = jwt.verify(session, config.SECRET)
        req.userId = decoded.id
    
        const user = await User.findById(req.userId, {password: 0})
        if(!user) return res.status(404).json({message: 'No sesion found'})

        next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}


export const isModerator = async (req, res, next) => {
    try{
        const user = await User.findById(req.userId)
        const role = await Role.find({_id: {$in: user.rol}})
    
        for (let i = 0; i < role.length; i++) {
            if (role[i].name === "moderator") {
    
              next();
              return;
    
            }
        }
        return res.status(403).json({ message: "Require Moderator Role!" })
    } catch(error) {
        return res.status(500).send({ message: error })
    }
}

export const isWebAdmin = async (req, res, next) => {
    try{
        const user = await User.findById(req.userId)
        const role = await Role.find({_id: {$in: user.rol}})
    
        for (let i = 0; i < role.length; i++) {
            if (role[i].name === "webAdmin") {
    
              next();
              return;
    
            }
        }
        return res.status(403).json({ message: "Web Admin Role!" })
    } catch(error) {
        return res.status(500).send({ message: error })
    }
}

export const isAdmin = async (req, res, next) => {
    try{
        const user = await User.findById(req.userId)
        const role = await Role.find({_id: {$in: user.rol}})
    
        for (let i = 0; i < role.length; i++) {
            if (role[i].name === "admin") {
    
              next();
              return;
    
            }
        }
        return res.status(403).json({ message: "Require Admin Role!" })
    } catch(error) {
        return res.status(500).send({ message: error })
    }
}


