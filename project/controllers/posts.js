const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
  res.render("posts/index.ejs");
});

router.get('/new',(req, res)=> {
  res.render('posts/new.ejs');
});




module.exports = router;
