import express from 'express'
import routers from './routes/index.routes.js'

const app = express()

app.use(routers)

app.listen(4000)
console.log('Server in running port', 4000)