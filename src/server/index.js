import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

import postRoute from './routes/posts.js';

// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');

dotenv.config();

const mongoStr = process.env.DATABASE_URL;
mongoose.connect(mongoStr);
const database = mongoose.connection;

database.on('error', (error) => {
	console.log(error);
});

database.on('connected', () => {
	console.log('Database connected');
});

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.resolve(process.cwd(), 'dist')));

app.use('/posts', postRoute);

app.use(bodyParser.json({ limit: '30mb', extended: true }));

app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.listen(PORT, () => {
	console.log(`Starting server at port ${PORT}`);
});