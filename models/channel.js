var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChannelSchema = new Schema({
    name : { type: String, required : true, unique: false },
    url  : { type: String, required : true, unique: false }
    // comments : [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
    // programs : [{type: mongoose.Schema.Types.ObjectId, ref: "Program"}]
    },
{
  timestamps: { createdAt: 'created', updatedAt: 'modified' }
});


module.exports = mongoose.model('Channel', ChannelSchema);