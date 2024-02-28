const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;  // Import ObjectId type

const schema = new Schema({
    updateCount : Number,
    componentCount : Number
});


module.exports = mongoose.model("counterSchema", schema);