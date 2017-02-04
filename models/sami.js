var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var samiSchema = new Schema({
    name : { type: String, required : true, unique: true }
   });

module.exports = mongoose.model('Sami', samiSchema);