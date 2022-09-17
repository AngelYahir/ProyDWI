import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    sellerName: {type: String},
    profileImg: {
        url: String,
        public_id: String
    },
    user_id: {type: String},
    ofSeller: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Seller', sellerSchema)