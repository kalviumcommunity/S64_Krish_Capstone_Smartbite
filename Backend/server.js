import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


//app config 
const app = express()
const port = process.env.PORT || 4000

// db connection 
connectDB();

// api endpoints
app.use('/api/food',foodRouter)


app.get("/",(req,res)=>{
    res.send("API Working")
 })
 app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
 })
 