const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://DeveloperTest:Developer2022DD@cluster0.puyhapm.mongodb.net/testingPerfomance')
    .then(()=> console.log('Connected to atlas'))
    .catch((error) => console.log(error))