const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const DB = process.env.DB;
mongoose.connect(process.env.DB)
    .then(()=> console.log('Connected to atlas'))
    .catch((error) => console.log(error))