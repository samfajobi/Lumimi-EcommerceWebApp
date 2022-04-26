const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');


const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: stringify,
            required: true
        },
        product: [
            {
                productId: {
                    type: String,
                    required: true
                },
                prodQuanty: {
                    type: Number,
                    default: 1
                }
            }
        ]
    }
);

const CartModel = mongoose.model('CartModel', CartSchema);


module.exports = CartModel;

