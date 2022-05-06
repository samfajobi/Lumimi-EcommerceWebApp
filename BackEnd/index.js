const dotenv = require("dotenv")
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const cartRoute = require("./routes/cart")


const app = express();

app.use(express.json());
  

dotenv.config()

mongoose.connect(process.env.DATABASE_URL)
.then( () => console.log('DB Connection Successful'))
.catch( err => console.log(err))

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use("/api/cart", cartRoute)

const Port = process.env.PORT || 4000;


app.listen( Port, () => {
    console.log(`Server is running on Port ${Port}`)
})