import {Router} from 'express'
import { verifyToken, isModerator, isAdmin, isWebAdmin } from '../middlewares/authJWT.js'
import * as prodCtrl from '../controllers/products.controllers.js'
import { stripeCheck } from '../controllers/stripe.controller.js'

const routers = Router()


routers.get('/', (req, res) => {
    res.json('This is not the API you are looking for')
})

//? Stripe Route
routers.post('/stripe', stripeCheck)

// ? Products Routers
routers.get('/products', prodCtrl.getProds)
routers.post('/products', verifyToken, prodCtrl.addProd)
routers.put('/products/:id', verifyToken, prodCtrl.updProd)
routers.delete('/products/:id', verifyToken, prodCtrl.dltProduct)
routers.get('/product/:id', prodCtrl.getProduct)

// ? Categories Routers
routers.get('/categories', prodCtrl.getCategories)
routers.post('/categories', [verifyToken, isWebAdmin], prodCtrl.addCategory)
routers.put('/categories/:id', [verifyToken, isWebAdmin], prodCtrl.updCategory)
routers.delete('/categories/:id', [verifyToken, isWebAdmin], prodCtrl.dltCategory)
routers.get('/categories/:id', prodCtrl.getProdByCat)

// ? Opinion Routes
routers.get('/opinions',[verifyToken, isModerator], prodCtrl.getOpinions)
routers.post('/opinions', verifyToken, prodCtrl.addOpinion)
routers.delete('/opinions/:id', [verifyToken, isModerator], prodCtrl.dltOpinion)
routers.get('/opinions/product/:id', prodCtrl.getProdOpinion)
routers.get('/product/opinions/:id', prodCtrl.getOpinionProd)


export default routers
