import { Schema, model } from "mongoose"

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        phone: [{
            pref: String,
            num: Number
        }],
        address: [{
            street1: String,
            num: Number,
            col: String,
            dist: String,
            state: String,
            country: String
        }]
    },
    profilePicture:{
        imgUrl: String,
        public_id: String
    },
    rol: [{
        ref: 'Roles',
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
})

export default model('User', userSchema)