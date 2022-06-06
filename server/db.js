import mongoose from "mongoose"
import { MONGODB_URI } from "./config.js"
/**
 * This is a mongodb connect function
 */
export async function connectMongo() {
    try {
        const mongo = await mongoose.connect(MONGODB_URI)
        console.log('Connected to', mongo.connection.name)
    } catch (error) {
        console.log(error)
    }
}