const mongoose = require('mongoose');
// const Post = require('../models/posts.js');

const commentSchema = mongoose.Schema({
  entry: String
  // title: String
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
