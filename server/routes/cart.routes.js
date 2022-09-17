import { Router } from "express";
import * as cart from '../controllers/cart.controllers.js'
import { isAdmin, isWebAdmin, verifyToken } from "../middlewares/authJWT.js";

const routers = Router()

// ? Sales routes 
routers.get('/cart', verifyToken, cart.getCart)
routers.put('/cart', verifyToken, cart.removeCartItem)
routers.delete('/cart', verifyToken, cart.cleanCart)
routers.post('/cart', verifyToken, cart.addItemCart)

export default routers