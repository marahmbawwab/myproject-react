const { response } = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const express=require('express');//create express server 
var mysql = require('mysql');
const cors =require('cors');
const { stringify } = require('querystring');
const app= express();
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
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000'
}));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000,()=>{console.log('listening to port 3000');
});
app.get('/',function(req, res){
 res.setHeader('Content-Type', 'application/json');
 res.send({message:"we did it !"});
 });
/*con.query(' DELETE from user_info', function (error, results, fields) {
  if (error)
      throw error;

  results.forEach(result => {
      console.log(result);
  });
});*/


//con.end();