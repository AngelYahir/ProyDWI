import {Router} from 'express'
import {signUp, signIn, logout, getUserInfo} from '../controllers/auth.controller.js'
import { checkExistingUser } from '../middlewares/verify.js'
import { verifyToken } from '../middlewares/authJWT.js'
import router from './user.routes.js'

const routers = Router()

routers.post('/login', signIn)
routers.post('/register', [checkExistingUser], signUp)
router.get('/logout', verifyToken, logout)
router.get('/userInfo', verifyToken, getUserInfo)

export default routers