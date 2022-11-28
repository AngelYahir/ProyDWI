import express from 'express'
import fileUpload from 'express-fileupload'
import morgan from 'morgan'
import { PORT } from './config.js'
import { connectMongo } from './db.js'
import { createRoles } from './libs/initialSetup.js'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'
import cookies from 'cookie-parser'
// ? Routes
import authRoutes from './routes/auth.routes.js'
import routers from './routes/products.routes.js'
import userRoutes from './routes/user.routes.js';
import salesRoutes from './routes/sales.routes.js'
import cartRoutes from './routes/cart.routes.js'


const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));
createRoles()
connectMongo()
app.use(cors({ credentials: true, origin: true, exposedHeaders: "Set-Cookies" }));


// ? Middlewares
app.use(cookies())
app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))


// ? Routes
app.use(routers)
app.use(authRoutes)
app.use(userRoutes)
app.use(cartRoutes)
app.use(salesRoutes)
// ? View request in dev enviroment
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(PORT)
console.log('Server in running port', PORT)
