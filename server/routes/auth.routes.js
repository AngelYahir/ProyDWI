import {Router} from 'express'

const routers = Router()

routers.get('/login', (req, res) => {
    const user = req.body

    res.json(user)
})
routers.get('/register', (req, res) => {res.json("Hola")})

export default router