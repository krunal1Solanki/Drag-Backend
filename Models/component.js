const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    initialWidth: {
        type: Number,
        default: 300,
    },
    initialHeight: {
        type: Number,
        default: 300,
    },
    info: {
        type: String,
        default: "Im performing test"
    }
});

module.exports = mongoose.model("componentSchema", schema);