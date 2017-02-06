var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChannelSchema = new Schema({
    name : { type: String, required : true, unique: false },
    },
{
  timestamps: { createdAt: 'created', updatedAt: 'modified' }
});

module.exports = mongoose.model('Channel', ChannelSchema);