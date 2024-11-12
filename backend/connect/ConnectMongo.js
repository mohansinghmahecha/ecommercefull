const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.url;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
