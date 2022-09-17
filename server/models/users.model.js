import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema ({
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
    rol: [{
        ref: 'Role',
        type: mongoose.Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
})

userSchema.statics.encryptPassword = async (password) => {
    const salt =  await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePass = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default mongoose.model('User', userSchema)