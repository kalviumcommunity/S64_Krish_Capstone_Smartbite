import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://krishagarwal52139:krish123@cluster0.ltzudax.mongodb.net/fooddevilery website ').then(()=>console.log("DB Connected"));
}