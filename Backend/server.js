import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import 'dotenv/config';
import aiRoute from './routes/aiRoute.js';
import paymentRoutes from './routes/payment.js';
import otpRoutes from './routes/otp.js';
import rateLimit from 'express-rate-limit';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { setupSocketHandlers } from './socketHandlers.js'; 

const app = express();
const port = process.env.PORT || 4000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, try again after 15 minutes.'
});

app.use(limiter);
app.use(express.json());
app.use(cors());

// DB connect
connectDB();

// Routes
app.use('/api/food', foodRouter);
app.use('/api/ai', aiRoute);
app.use('/api/payment', paymentRoutes);
app.use('/api/otp', otpRoutes);
app.use('/images', express.static('uploads'));

app.get("/", (req, res) => {
  res.send("API working");
});

// ✅ Setup HTTP + WebSocket
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

setupSocketHandlers(io); // ✅ Call handler

server.listen(port, () => {
  console.log(`🚀 Server + WebSocket running on http://localhost:${port}`);
});
