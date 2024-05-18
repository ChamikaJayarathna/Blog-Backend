import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user-route.js';
import authRoutes from './routes/auth-route.js';

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




app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);













app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


