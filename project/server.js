const express = require('express');
const app = express();



app.get('/', (req, res)=>{
  res.render("index.ejs");
});

app.get('/posts', (req, res)=>{
  res.send("post index!");
})






app.listen(3000, ()=> {
  console.log("listening!");
});
