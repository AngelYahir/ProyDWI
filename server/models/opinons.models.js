import mongoose from "mongoose";

const opinionSchema = mongoose.Schema({
    user_id: {type: String},
    score: {type: mongoose.Schema.Types.Decimal128},
    comment: {type: String},
    product_id: {type: String}
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Opinion', opinionSchema)