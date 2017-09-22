const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  entry: String,
  title: String
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
