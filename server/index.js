import express from 'express'
import routers from './routes/products.routes.js'
import fileUpload from 'express-fileupload'
import morgan from 'morgan'
import { PORT } from './config.js'
import { connectMongo } from './db.js'

const app = express()

connectMongo()

// ? Middlewares
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))


// ? Routes
app.use(routers)
// ? View request in dev enviroment
app.use(morgan('dev'))

app.listen(PORT)
console.log('Server in running port', PORT)
