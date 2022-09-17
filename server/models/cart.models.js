import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    product_id: {type: String},
    user_id: {type: String},
    quantity: {type: Number}
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Cart', cartSchema)