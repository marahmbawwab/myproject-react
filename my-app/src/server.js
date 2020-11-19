const bodyParser = require('body-parser');
const express=require('express');
var mysql = require('mysql');
const cors =require('cors');
const app= express();
const jwt = require('jsonwebtoken');
var md5 = require('md5');
const logger = require("morgan");
const { url } = require('inspector');
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
//app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  next();
}); 

app.get('/signin', function(req, res) {
  con.query("SELECT * FROM user_info where username= ?",[req.param('user')], function (err, result, fields) {
    if (err) throw err;
    if(result.length===0){
     res.json({message:"there is an error in username"});
    }
    else {
      if(result[0].password===md5(req.param('pass'))){
        res.json({message:"success!",type:result[0].type});
      }
      else {
        res.json({message:"there is an error in password"});
      }
    }
  });
});
app.post('/signup', function(req, res) {
  con.query('SELECT username FROM user_info where username= ?',[req.body.user], function (err, result, fields) {
    if (err) throw err;
    var numRows = result.length;
   if(numRows===0){
        con.query('INSERT INTO user_info (name,username,password,phone,email,gender,type,status) VALUES (?,?,?,?,?,?,?,?) '
        ,[req.body.name,req.body.user,md5(req.body.pass),req.body.phone,req.body.email,req.body.gender,"typical",1],function (err, result, fields) {
          if (err) throw err;
         if(result.affectedRows===1){
          res.json({message:"success!"});
         }
         else {
          res.json({message:"not success!"});
         }
        });
    }
    else {
      res.json({message:"there is another one with that username!"});
    }
  });
});
app.get('/getcat', function(req, res) {
  con.query("SELECT id,name FROM category", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});
app.listen(3001,()=>{console.log('listening to port 3001');
});
