var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    author : { type: String, required : true, unique: false },
    text : { type: String },
    date : { type: Date},
    channel :{type: mongoose.Schema.Types.ObjectId, ref: 'Channel'},
    },
{
  timestamps: { createdAt: 'created', updatedAt: 'modified' }
});

module.exports = mongoose.model('Comment', CommentSchema);