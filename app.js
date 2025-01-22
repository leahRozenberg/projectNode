import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import apartmentRouter from './api/routers/apartment.js';
import cityRouter from './api/routers/city.js';
import advertiserRouter from './api/routers/advertiser.js';
import dotenv from 'dotenv';
const app = express();
const port = 3021;
dotenv.config()
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {

        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.error({ error: err.message })
    })
app.use(bodyParser.json());

app.use('/apartments', apartmentRouter);
app.use('/advertiser', advertiserRouter);
app.use('/city', cityRouter);


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
});