import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user-route.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});


app.use('/api/user', userRoutes);













app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


