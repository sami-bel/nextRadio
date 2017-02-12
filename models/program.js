var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgramSchema = new Schema({
    name : { type: String, required : true, unique: false },
    channel :{type: mongoose.Schema.Types.ObjectId, ref: 'Channel'},
    hour  : { type: String, required : true, unique: false },
    description : { type: String, required : true, unique: false },


    },
{
  timestamps: { createdAt: 'created', updatedAt: 'modified' }
});

module.exports = mongoose.model('Program', ProgramSchema);