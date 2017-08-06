const express = require('express');
const router = express.Router();

const postsController = require('./controllers/posts.js');
app.use('/posts',postsController);

router.get('/', (req, res)=>{
  res.render("posts/index.ejs");
});





module.exports = router;
