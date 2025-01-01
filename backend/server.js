import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
// import {Book} from './models/book.models.js';
import bookRoutes from './router/bookRoutes.js';
const app = express();

//Middleware for parsing JSON data
app.use(express.json());

dotenv.config();
process.env.MONGO_URI
const PORT = process.env.PORT || 5555;


// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],

// }));

app.use(cors());


app.use('/books', bookRoutes);






mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB Connected successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
}).catch((err) => {
  console.log(err);
}) 