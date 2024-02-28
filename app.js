const express = require('express');
const cors = require('cors');
const componentModel  = require('./Models/component.js');
const  counterModel = require('./Models/counterModel.js');
require('./dbConnection.js')
const app = express();
app.use(cors());

app.use(express.json())

app.post('/api/addComponent', async (req, res) => {
    try {
        const { initialHeight, initialWidth, info } = req.body;

        const comp = await componentModel.create({
            initialHeight, initialWidth, info
        });

      
        return res.json({
            success: true,
            message : "Component created successfully"
        });

    } catch (err) {
        return res.json({
            success : false,
            error: err.message,
        });
    }
})

app.get('/api/getComponents', async (req, res) => {
    try {
        const info = await componentModel.find();
        return res.send({
            info
        })
    } catch (error) {
        return res.status(400).send({
            message : error.message
        })
    }
})

app.post("/api/updateComponent", async (req, res) => {
    try {
        const body = req.body;
        console.log(body)
        const { initialHeight, initialWidth, info, _id } = body;

        const updateData = { initialHeight, initialWidth, info };

        const updatedComponent = await componentModel.findByIdAndUpdate(_id, updateData, {
            new: true, 
        });

        if (!updatedComponent) {
            return res.json({
                error: 'Component not found',
            });
        }

        return res.json({
            success: true,
            updatedComponent,
        });
    } catch (err) {
        return res.json({
            success : 'false',
            error: err.message,
        });
    }
})

app.listen(3012, ()=> {
    console.log("server running")
})