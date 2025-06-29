import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import 'dotenv/config';
import aiRoute from './routes/aiRoute.js';
app.use('/api/ai', aiRoute);
import paymentRoutes from './routes/payment.js';
app.use('/api/payment', paymentRoutes);
import otpRoutes from './routes/otp.js';
app.use('/api/otp', otpRoutes);
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests from this IP, try again after 15 minutes.'
});

app.use(limiter);



const app = express()
const port = process.env.PORT || 4000;


// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))


app.get("/",(req,res)=>{
        res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

