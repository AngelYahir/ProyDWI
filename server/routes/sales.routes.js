import { Router } from "express";
import * as sale from '../controllers/sales.controllers.js'
import { isAdmin, isWebAdmin, verifyToken } from "../middlewares/authJWT.js";

const routers = Router()

// ? Sales routes 
routers.get('/api/sales', [verifyToken, isAdmin], sale.getSales)
routers.post('/api/sales', verifyToken, sale.addSale)
routers.put('/api/sale/:id', verifyToken, sale.updSales)
routers.get('/api/sales/:id', verifyToken, sale.getUserSales)
routers.get('/api/seller/sales/:id', verifyToken, sale.getSellerSales)

export default routers