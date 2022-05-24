const dotenv = require("dotenv")
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const cartRoute = require("./routes/cart")
const productRoute = require("./routes/products")
const cors = require("cors")


const app = express();

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration  



app.use(express.json());
  

dotenv.config()

mongoose.connect(process.env.DATABASE_URL)
.then( () => console.log('DB Connection Successful'))
.catch( err => console.log(err))

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use("/api/cart", cartRoute)
app.use("/api/products", productRoute)

const Port = process.env.PORT || 4000;


app.listen( Port, () => {
    console.log(`Server is running on Port ${Port}`)
})