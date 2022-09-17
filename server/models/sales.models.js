import mongoose from "mongoose";

const saleSchema =  new mongoose.Schema({
    product_id: {type: String},
    quantity: {type: Number},
    subtotal: {type: mongoose.Schema.Types.Decimal128},
    total: {type: mongoose.Schema.Types.Decimal128},
    seller_id: {type: String},
    user_id: {type: String},
    status: {type: String}
})

export default mongoose.model('Sales', saleSchema)