const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  entry: String
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
