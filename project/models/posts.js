const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  tag: String,
  title: String,
  image: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
