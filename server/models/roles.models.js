import mongoose from "mongoose"

const roleSchema = new mongoose.Schema({
    name: {type: String}
}, {
    versionKey: false,
})

export default mongoose.model('Role', roleSchema)