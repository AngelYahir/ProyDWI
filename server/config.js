import dotenv from 'dotenv'

dotenv.config()

// ? Export enviroments variables
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/notesdb'

export const PORT = process.env.PORT || 5000