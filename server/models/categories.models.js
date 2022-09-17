import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name: {type: String},
    img: {
        url: String,
        public_id: String
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Category', categorySchema)