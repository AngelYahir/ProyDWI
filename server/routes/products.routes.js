import {Router} from 'express'
import { verifyToken, isModerator, isAdmin, isWebAdmin } from '../middlewares/authJWT.js'
import * as prodCtrl from '../controllers/products.controllers.js'
import { stripeCheck } from '../controllers/stripe.controller.js'

const routers = Router()


routers.get('/api', (req, res) => {
    res.json('This is not the API you are looking for')
})

//? Stripe Route
routers.post('/stripe', stripeCheck)

// ? Products Routers
routers.get('/api/products', prodCtrl.getProds)
routers.post('/api/products', prodCtrl.addProd)
routers.put('/api/products/:id', verifyToken, prodCtrl.updProd)
routers.delete('/api/products/:id', verifyToken, prodCtrl.dltProduct)
routers.get('/api/product/:id', prodCtrl.getProduct)

// ? Categories Routers
routers.get('/api/categories', prodCtrl.getCategories)
routers.post('/api/categories', [verifyToken, isWebAdmin], prodCtrl.addCategory)
routers.put('/api/categories/:id', [verifyToken, isWebAdmin], prodCtrl.updCategory)
routers.delete('/api/categories/:id', [verifyToken, isWebAdmin], prodCtrl.dltCategory)
routers.get('/api/categories/:id', prodCtrl.getProdByCat)

// ? Opinion Routes
routers.get('/api/opinions',[verifyToken, isModerator], prodCtrl.getOpinions)
routers.post('/api/opinions', prodCtrl.addOpinion)
routers.delete('/api/opinions/:id', [verifyToken, isModerator], prodCtrl.dltOpinion)
routers.get('/api/opinions/product/:id', prodCtrl.getProdOpinion)
routers.get('/api/product/opinions/:id', prodCtrl.getOpinionProd)


export default routers
