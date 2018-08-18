const express = require('express');
const app = express();
const port=8081;
const ejs =require("ejs");
const path=require("path");

app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'))
app.set('view engine', 'ejs');

const Saif = ["Saif","Misbah","Farookhy" ]

app.get('/', function (req, res) {
  res.render('index',{Saif:Saif});
});
 app.listen (port,(req,res)=> console.log(`Server Running at ${port}`));