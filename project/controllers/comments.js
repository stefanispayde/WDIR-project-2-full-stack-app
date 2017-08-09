
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
//creating new comment pushesa copy onto posts comments array
router.post('/', (req, res)=> {
  Post.findById(req.body.postId, (err, foundPost)=> {
    Comment.create(req.body, (err, createdComment)=> {
      foundPost.comments.push(createdComment);
      foundPost.save((err, data)=> {
        res.redirect('/comments');
      });
    });
  });
});
