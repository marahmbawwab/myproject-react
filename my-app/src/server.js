const bodyParser = require('body-parser');
const path = require('path');
const express=require('express');//create express server 
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
/*app.get('/about',(req,res)=>{
  con.query('INSERT INTO user_info (username,state) VALUES ("h",1)', 
  function (error, results, fields){
    if(error)
        throw error;
  
    results.forEach(result => {
        console.log(result);
    });
  });
});*/
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  next();
}); 
app.get('/signin', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});
app.listen(3001,()=>{console.log('listening to port 3001');
});
/*app.get('/sign',function(req, res){
// res.setHeader('Content-Type', 'application/json');
 res.send(json({messege:"we did it !"}));
 });*/
/*con.query(' DELETE from user_info', function (error, results, fields) {
  if (error)
      throw error;

  results.forEach(result => {
      console.log(result);
  });
});*/


//con.end();