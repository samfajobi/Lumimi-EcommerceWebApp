const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            requiured: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false
        }

    },
    { timestamps: true }

)



const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;