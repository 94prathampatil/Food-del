// Logic of creating and connecting database to mongoose

import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://CodeIt06:191204@cluster0.xsrfh.mongodb.net/food-del').then(() => console.log("db connected"))
}