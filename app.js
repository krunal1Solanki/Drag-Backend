const express = require('express');
const cors = require('cors');
const componentModel  = require('./Models/component.js');
const  counterModel = require('./Models/counterModel.js');
const { basicRouter } = require('./Router/basicRouter.js');
require('./dbConnection.js')
const app = express();
app.use(cors());


app.use(express.json())

app.use('/api', basicRouter);


app.listen(3012, ()=> {
    console.log("server running")
})