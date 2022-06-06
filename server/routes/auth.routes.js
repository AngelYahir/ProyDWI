import {Router} from 'express'

const routers = Router()

routers.get('/login', (req, res) => {res.json("Hola")})
routers.get('/register', (req, res) => {res.json("Hola")})

export default router