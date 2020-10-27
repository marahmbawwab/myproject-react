const express=require('express');//create express server 
const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'localhost',
user:'root',
password:'marah',//password of your mysql db
database:'marah'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tasks", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});