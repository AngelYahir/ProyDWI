import { Schema, model } from "mongoose"

const roleSchema = new Schema({
    name: {typpe: String}
}, {
    versionKey: false,
})

export default model('Roles', roleSchema)