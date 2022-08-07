import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';


// To be edited
import postRoute from './routes/posts.js';


dotenv.config();

const mongoStr = process.env.DATABASE_URL;
mongoose.connect(mongoStr);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.on('connected', () => {
  console.log('Database connected');
})

const PORT = process.env.PORT || 5000

const app = express();

// To be edited
app.use('/posts', postRoute);

app.use(bodyParser.json({ limit: "30mb", extended: true}));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(cors());

app.listen(PORT, () => {
  console.log(`Starting server at port ${ PORT }`);
})