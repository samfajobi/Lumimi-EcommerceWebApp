const express = require('express');
const UserModel = require('../models/User');
const { verifyTokenAndAuthorization } = require('./verifyJwtToken');
const router = express.Router();


router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.Sec_Pass).toString()  
    }

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true,
                runValidators: true
            }
            )
        res.status(200).json(updatedUser)

    } catch(err) {
        res.status(403).json(err)

    }

})




module.exports = router;