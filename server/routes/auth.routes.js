import {Router} from 'express'
import {signUp, signIn, logout, getUserInfo} from '../controllers/auth.controller.js'
import { checkExistingUser } from '../middlewares/verify.js'
import { verifyToken } from '../middlewares/authJWT.js'
import router from './user.routes.js'

const routers = Router()

routers.post('/api/login', signIn)
routers.post('/api/register', [checkExistingUser], signUp)
router.get('/api/logout', verifyToken, logout)
router.get('/api/userInfo', verifyToken, getUserInfo)

export default routers