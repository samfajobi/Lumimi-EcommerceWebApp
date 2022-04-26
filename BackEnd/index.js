const dotenv = require("dotenv")
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user')

const app = express();


dotenv.config()

mongoose.connect(process.env.DATABASE_URL)
.then( () => console.log('DB Connection Successful'))
.catch( err => console.log(err))

app.use('/api/test', userRoute)

const Port = process.env.PORT || 4000;


app.listen( Port, () => {
    console.log(`Server is running on Port ${Port}`)
})