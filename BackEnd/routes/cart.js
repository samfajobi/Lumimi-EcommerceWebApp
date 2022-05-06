const express = require('express');
const router = express.Router();
const UserCart = require("./models/Cart")


router.put("/:id", async ( req, res) => {
    try{

        const User = await  UserCart.fiindByIdAndUpdate(req,params.id)
        res.status(200).json(User)

    } catch(err) {
        res.status(403).json(err)
    }

})



router.delete("/:id", async ( res, req ) => {

    try{

        await UserCart.fiindByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted Successfully")

    } catch(err) {
        res.status(404).json(err)
    }


});


router.get("/:id", async (res, req ) => {
    try {

        const getOneProduct = await UserCart.findById(req.params.id)

        res.status(200).json(getOneProduct)



    } catch(err) {
        res.status(403).json(err)
    }
})


router.get("/",   async ( res, req ) => {
    try {

        const getAllProducts  = await UserCart.find()

        res.status(200).json(getAllProducts)

    } catch(err) {
        res.status(403).json(err)
    }
})




module.exports = router;