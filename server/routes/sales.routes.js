import { Router } from "express";
import * as sale from '../controllers/sales.controllers.js'
import { isAdmin, isWebAdmin, verifyToken } from "../middlewares/authJWT.js";

const routers = Router()

// ? Sales routes 
routers.get('/sales', [verifyToken, isAdmin], sale.getSales)
routers.post('/sales', verifyToken, sale.addSale)
routers.put('/sale/:id', verifyToken, sale.updSales)
routers.get('/sales/:id', verifyToken, sale.getUserSales)
routers.get('/seller/sales/:id', verifyToken, sale.getSellerSales)

export default routers