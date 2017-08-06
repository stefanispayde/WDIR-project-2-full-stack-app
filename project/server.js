const express = require('express');
const app = express();
const mongoose = require('mongoose');

const postsController = require('./controllers/posts.js');
app.use('/posts',postsController);



app.get('/', (req, res)=>{
  res.render("index.ejs");
});





mongoose.connect('mongodb://localhost:27017/posts');
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo!');
});


app.listen(3000, ()=> {
  console.log("listening!");
});
