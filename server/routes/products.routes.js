import {Router} from 'express'

const routers = Router()

routers.get('/', (req, res) => {res.json("Hola")})

export default routers
