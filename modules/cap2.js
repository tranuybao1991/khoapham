const mongoose = require('mongoose');
const cap2Schema = new mongoose.Schema({
    name : String,
    idcat : String,
    mang : [{type:mongoose.Schema.Types.ObjectId}]
});
module.exports = mongoose.model('Cap2',cap2Schema);