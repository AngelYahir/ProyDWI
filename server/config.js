import dotenv from 'dotenv'
import cloudinary from 'cloudinary'

dotenv.config()

// ? Export enviroments variables
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/notesdb'

export const PORT = process.env.PORT || 5000

export default {
    SECRET: 'gmarket-api'
}

export const CLOUD_NAME = process.env.CLOUD_NAME
export const API_KEY = process.env.API_KEY
export const API_SECRET = process.env.API_SECRET