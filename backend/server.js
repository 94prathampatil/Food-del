/*
    express
    mongoose --> to store the data to database;
    jsonwebtoke --> to parse json data
    bcrypt --> to encrypt the user data specifically
    cors --> to make frontend able to connect with backend 
    dotenv --> to use environment variable in project
    multer --> using this multer we can create image store system
    stripe --> use for payment gateway
    validator --> to validate the user information like email, password, etc
    nodemon --> to start the server automatically whenever changes will done in project
*/

import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import 'dotenv/config.js'


// app config
const app = express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user/", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)



app.get("/", (req, res) => {
    res.send("API Working....:)")
})

app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})

