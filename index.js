import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user-route.js';
import authRoutes from './routes/auth-route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const app = express();
app.use(express.json());
app.use(cookieParser());




app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);



app.use((err, req, res, next) => {
    const statusCord = err.statusCord || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCord).json({
        success: false,
        statusCord,
        message
    })
});













app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


