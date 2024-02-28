const componentModel = require('../Models/component')
const counterModel = require('../Models/counterModel')

exports.addComponent = async (req, res) => {
    try {
        const { initialHeight, initialWidth, info } = req.body;

        const comp = await componentModel.create({
            initialHeight, initialWidth, info
        });


        return res.json({
            success: true,
            message: "Component created successfully"
        });

    } catch (err) {
        return res.json({
            success: false,
            error: err.message,
        });
    }

}


exports.getComponents = async (req, res) => {
    try {
        const info = await componentModel.find();
        return res.send({
            info
        })
    } catch (error) {
        return res.status(400).send({
            message: error.message
        })
    }

}


exports.updateComponent = async (req, res) => {
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
            success: 'false',
            error: err.message,
        });
    }
}

