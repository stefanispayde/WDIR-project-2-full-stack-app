const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');
const Comment = require('../models/comments.js');

router.get('/', (req, res)=> {
	Comment.find({}, (err, foundComments)=> {
		res.render('comments/index.ejs', {
			comments: foundComments
		});
	})
});

// reading/showing/getting all posts on new comments page
router.get('/new', (req, res)=> {
  Post.find({}, (err, allPosts)=> {
    res.render('comments/new.ejs', {
      posts: allPosts
    });
  })
});

router.get('/', (req, res)=>{
	res.render('comments/index.ejs');
});

//read/showing post with link to comment show page
router.get('/:id', (req, res)=> {
  Comment.findById(req.params.id, (err, foundComment)=> {
    Post.findOne({'comments._id':req.params.id}, (err, foundPost)=> {
      res.render('comments/comment_show.ejs', {
        post:foundPost,
        comment:foundComment
      });
    })
  });
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
      foundPost.save((err, savedPost)=> {
        res.redirect('/posts');
      });
    });
  });
});

//updating a comment updates posts comment page
router.put('/:id', (req, res)=> {
	Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedComment)=> {
		Post.findOne({'comments._id' : req.params.id }, (err, foundPost)=> {
			foundPost.comments.id(req.params.id).remove();
			foundPost.comments.push(updatedComment);
			foundPost.save((err, data)=>{
				res.redirect('/comments/'+req.params.id);
			});
		});
	});
});



module.exports = router;
