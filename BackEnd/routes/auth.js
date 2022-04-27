const router = require('express').Router()
const UserModel = require('../models/User')

router.post('/register', async ( req, res) => {
    const newUser = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const userData = await newUser.save()
        res.status(200).json(userData);

    } catch(err) {
        res.status(404).json(err)


    }
   


})

module.exports = router; 