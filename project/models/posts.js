const mongoose = require('mongoose');
const Comment = require('./comments');

const postSchema = mongoose.Schema({
  tag: String,
  title: String,
  image: String,
  entry: String,
  comments: [Comment.schema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
