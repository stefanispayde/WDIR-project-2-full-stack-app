const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');
const Comment = require('../models/comments.js');


router.get('/', (req, res)=>{
	res.render('comments/index.ejs');
});

// reading/showing/getting all posts on new comments page
router.get('/new', (req, res)=> {
  Post.find({}, (err, allPosts)=> {
    res.render('comments/new.ejs', {
      posts: allPosts
    });
  })
});


//creating a new comment pushes a copy onto another posts comment array
router.post('/', (req, res)=> {
  Post.findById(req.body.postId, (err, foundPost)=> {
    Comment.create(req.body, (err, createdComment)=> {
      foundPost.comments.push(createdComment);
      foundPost.save((err, data)=> {
        res.redirect('/posts');
      });
    });
  });
});


// Deleting a comment updates a post's comment list
router.delete('/:id', (req, res)=> {
  Comment.findByIdAndRemove(req.params.id, (err, foundComment)=> {
    Post.findOne({'comments._id':req.params.id}, (err, foundPost)=> {
      foundPost.comments.id(req.params.id).remove();
      foundPost.save((err, data)=> {
        res.redirect('/comments');
      });
    });
  });
});

//read/showing post with link to comment show page
router.get('/:id', (req, res)=> {
  Comment.findById(req.params.id, (err, foundComment)=> {
    Post.findOne({'comments._id':req.params.id}, (err, foundPost)=> {
      res.render('comments/show.ejs', {
        post:foundPost,
        comment:foundComment
      });
    })
  });
});

module.exports = router;
