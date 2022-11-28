import { Router } from "express";
import * as cart from '../controllers/cart.controllers.js'
import { isAdmin, isWebAdmin, verifyToken } from "../middlewares/authJWT.js";

const routers = Router()

// ? Sales routes 
routers.get('/api/cart', verifyToken, cart.getCart)
routers.put('/api/cart', verifyToken, cart.removeCartItem)
routers.delete('/api/cart', verifyToken, cart.cleanCart)
routers.post('/api/cart', verifyToken, cart.addItemCart)

export default routers