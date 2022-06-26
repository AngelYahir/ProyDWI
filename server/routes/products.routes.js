import {Router} from 'express'

const routers = Router()

routers.get('/', (req, res) => {res.json("Hola")})
routers.get('/login', (req, res) => {
    const user = req.body

    res.json(user)
})

routers.get('/register', (req, res) => {

    res.status(200)
})

export default routers
