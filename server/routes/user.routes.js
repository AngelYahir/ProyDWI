import { Router } from "express";
import * as user from '../controllers/users.controllers.js'
import { isWebAdmin, verifyToken } from "../middlewares/authJWT.js";

const router = Router()

// ? User routes
router.get('/api/users', [verifyToken, isWebAdmin], user.getUsers)
router.put('/api/user/:id', [verifyToken], user.updUser)
router.delete('/api/user/:id', [verifyToken, isWebAdmin], user.dltUser)

// ? Seller routes
router.get('/api/seller/products', verifyToken, user.getUserProds)
router.get('/api/sellers', [verifyToken, isWebAdmin], user.getSellers)
router.get('/api/seller/:id', user.getSeller)
router.post('/api/seller', verifyToken, user.addSeller)
router.put('/api/seller/:id', verifyToken, user.updSeller)
router.delete('/api/seller/:id', [verifyToken, isWebAdmin], user.dltSeller)

// ? Mail route
router.post('/sendMail', user.sendMail)

export default router