const express = require('express');
const app = express();
const mongoose = require('mongoose');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use( express.static( 'public' ) );

const postsController = require('./controllers/posts.js');
app.use('/posts',postsController);
const commentsController = require('./controllers/comments.js');
app.use('/comments', commentsController);


app.get('/', (req, res)=>{
  res.render("index.ejs");
});


const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/posts';
mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=> {
  console.log('connected to mongo!');
});

const port = process.env.PORT || 3010;

app.listen(port, ()=> {
  console.log("listening!");
});

console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');
