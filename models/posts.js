const mongoose = require('mongoose');
const Comment = require('./comments.js');

const postSchema = mongoose.Schema({
  tag: String,
  title: String,
  entry: String,
  comments: [Comment.schema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
