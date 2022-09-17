import { Router } from "express";
import * as user from '../controllers/users.controllers.js'
import { isWebAdmin, verifyToken } from "../middlewares/authJWT.js";

const router = Router()

// ? User routes
router.get('/users', [verifyToken, isWebAdmin], user.getUsers)
router.put('/user/:id', [verifyToken], user.updUser)
router.delete('/user/:id', [verifyToken, isWebAdmin], user.dltUser)

// ? Seller routes
router.get('/seller/products', verifyToken, user.getUserProds)
router.get('/sellers', [verifyToken, isWebAdmin], user.getSellers)
router.get('/seller/:id', user.getSeller)
router.post('/seller', verifyToken, user.addSeller)
router.put('/seller/:id', verifyToken, user.updSeller)
router.delete('/seller/:id', [verifyToken, isWebAdmin], user.dltSeller)

// ? Mail route
router.post('/sendMail', user.sendMail)

export default router