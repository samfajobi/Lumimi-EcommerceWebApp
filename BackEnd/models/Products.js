const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true   
        },
        categories: {
            type: Array,
            required: true
        },
        des: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true

        },
        price: {
            type: Number,
            required: true    
        },
        size: {
            type: String   
        },
        color: {
            type: String

        },
    },
    { timeStamps: true }
)


module.exports = mongoose.model('ProductModel',  ProductSchema);