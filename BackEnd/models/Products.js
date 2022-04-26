const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            ty
        },
        des: {
            
        },
        img: {

        }
    }
)


module.exports = mongoose.model('ProductModel',  ProductSchema);