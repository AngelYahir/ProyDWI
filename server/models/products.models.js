import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {type: String},
    category: [{
            ref: 'Category', 
            type: mongoose.Schema.Types.ObjectId
        }],
    description: {type: String},
    price: {type: mongoose.Schema.Types.Decimal128},
    stock: {type: Number},
    images: {
             url: String, 
             public_id: String 
            },
    seller: {type: String}
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Products', productSchema)

