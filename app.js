import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import apartmentRouter from './api/routers/apartment.js';
import categoryRouter from './api/routers/category.js';
import dotenv from 'dotenv';
dotenv.config()
const app = express();
const port = 3021;



mongoose.connect(process.env.CONNECT_STRING)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.error({ error: err.message })
    })
app.use(bodyParser.json());

app.use('/apartments', apartmentRouter);
app.use('/categories', categoryRouter);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
});