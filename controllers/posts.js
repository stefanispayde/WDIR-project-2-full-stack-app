const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');
const Comment = require('../models/comments');

// get/read/show all posts
router.get('/', (req, res)=> {
  Post.find({}, (err, foundPost)=> {
    console.log(foundPost)
    res.render('posts/index.ejs', {
      posts: foundPost
    });
  });
});

// showing new post form
router.get('/new',(req, res)=> {
  res.render('posts/new.ejs');
});

// creating a new post
router.post('/', (req, res)=> {
  Post.create(req.body, (err, createdPost)=> {
    res.redirect('/posts');  // starts off routes in URL
  });
});


//reading/showing individual page for post
router.get('/:id', (req, res)=> {
  Post.findById(req.params.id, (err, foundPost)=> {
    res.render('posts/show.ejs', {
      post: foundPost
    });
  });
});


// reading/showing/getting edit post view
router.get('/:id/edit', (req, res)=> {
  Post.findById(req.params.id, (err, foundPost)=> {
    res.render('posts/edit.ejs', {
      post:foundPost
    })
  })
})

//updating to id route
router.put('/:id', (req, res)=> {
  Post.findByIdAndUpdate(req.params.id, req.body, (err, foundPost)=> {
    res.redirect('/posts')
  })
});



module.exports = router;
