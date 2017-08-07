const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');


router.get('/new',(req, res)=> {
  res.render('posts/new.ejs');
});

router.post('/', (req, res)=> {
  Post.create(req.body, (err, createdPost)=> {
    res.redirect('/posts');  // starts off routes in URL
  });
});


router.get('/', (req, res)=> {
  // console.log('log+++++++++++++++');
  Post.find({}, (err, foundPost)=> {
    // console.log("========")
    console.log(foundPost)
    res.render('posts/index.ejs', {
      posts: foundPost
    });
  });
});

router.get('/:id', (req, res)=> {
  Post.findById(req.params.id, (err, foundPost)=> {
    res.render('posts/show.ejs', {
      posts: foundPost
    });
  });
});

router.get('/:id/edit', (req, res)=> {
  Post.findById(req.params.id, (err, foundPost)=> {
    res.render('posts/edit.ejs', {
      post: foundPost
    });
  });
});

router.delete('/:id', (req, res)=> {
  Post.findByIdAndRemove(req.params.id, ()=> {
    res.direct('/posts');
  });
});

module.exports = router;
