
const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');
const Comment = require('../models/comments.js');

//reading/showing/getting all posts on new comments page
router.get('/new', (req, res)=> {
  Post.find{}, (err, allPosts)=> {
    res.render('comments/new.ejs', {
      posts: allPosts
    });
  });
});
