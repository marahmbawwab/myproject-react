const bodyParser = require('body-parser');
const express=require('express');
var mysql = require('mysql');
const cors =require('cors');
const app= express();
const logger = require("morgan");
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'marah',
  database:'marah'

});
con.connect(function(err) {
  if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
  }
console.log('Connected !' );
});

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  req.header("Content-Type",'application/json');
  next();
}); 

app.get('/signin', function(req, res) {
  con.query("SELECT username,password FROM user_info", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});
app.post('/signup', function(req, res) {

  var password=req.body;
  var username=req.body.user ;
  var x ={mes:"i can do it"};
  res.json(x);
  console.log(password);
  con.query("SELECT username,password FROM user_info", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
app.listen(3001,()=>{console.log('listening to port 3001');
});
