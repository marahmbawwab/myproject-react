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
        res.json({message:"success!",type:result[0].type,id:result[0].id});
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
          con.query('SELECT id from user_info where username=?',[req.body.user],function (err, result, fields) {
            if (err) throw err;
      con.query('INSERT INTO cart (status,id_user) VALUES (?,?)'
            ,[1,result[0].id],function (err, result, fields) {
              if (err) throw err;
            });
          });
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
app.get('/getdep', function(req, res) {
  con.query('SELECT id FROM category where name=?',[req.param('name')], function (err, result, fields) {
    if (err) throw err;
 con.query('SELECT id,name FROM department where id_cat=?',result[0].id, function (err, result, fields) {
  if (err) throw err;
 res.send(result);
});
});
});
app.get('/getsize', function(req, res) {
  con.query('SELECT id FROM department where name=?',[req.param('dep')], function (err, result, fields) {
    if (err) throw err;
 con.query('SELECT id,sizetype FROM size where id_dep=?',result[0].id, function (err, result, fields) {
  if (err) throw err;
 res.send(result);
});
});
});
app.get('/addprod', function(req, res) {
  con.query('SELECT id FROM department where name=?',[req.param('dep')], function (err, result, fields) {
    if (err) throw err;
    con.query('INSERT INTO product (name,quantity,description,size,id_dep,status) VALUES (?,?,?,?,?,?)'
    ,[req.param('name'),req.param('quan'),req.param('desc'),req.param('size'),result[0].id,1],function (err, result, fields) {
      if (err) throw err ;
     if(result.affectedRows===1){
      res.json({mes:"success"});
     }
     else {
      res.json({mes:"not success!"});
     }
    }); 
 });
});

app.get('/getcart', function(req, res) {
  con.query('SELECT id FROM cart where id_user=?',[req.param('id')], function (err, result, fields) {
    if (err) throw err;
con.query('SELECT id_order FROM cart_products where id_cat=?',result[0].id, function (err, result, fields) {
      if (err) throw err;
      
    if(result.affectedRows > 0){
      for(i =0;i < result.length ; i++){
      let id =result[0].id_order ;
    con.query('SELECT * FROM order_status where id_order=?',result[0].id_order, function (err, result, fields) {
      if (err) throw err;
   let date =result[0].dateorder ;
   let orderstate = result[0].status_order ;
   con.query('SELECT * FROM orders where id=?',id, function (err, result, fields) {
    if (err) throw err;
    let q =result[0].quantity ;
    let id_prd = result[0].id_product ;
    con.query('SELECT name FROM product where id=?',id_prd, function (err, result, fields) {
      if (err) throw err;
      res.send({mes:"success!",res:[{orderid:id,name:result[0].name ,quan:q ,odate:date,ostate:orderstate}]});
    });
 });
});
}
 } 
 else {
      res.send({mes:"error",res:[]});
    }
  });
});
});
app.get('/showproducts', function(req, res) {
  con.query('SELECT * FROM product where id_dep=?',[req.param('id')], function (err, result, fields) {
    if (err) throw err;
    if(result.affectedRows > 0){
  res.send({mes:"success",res:result});
    }
    else {
      res.send({mes:"error",res:[]})
    }
  });
});
app.get('/showspecificproduct', function(req, res) {
  con.query('SELECT * FROM product where id=?',[req.param('id')], function (err, result, fields) {
    if (err) throw err;
    if(result.affectedRows > 0){
  res.send({mes:"success",res:result});
    }
    else {
      res.send({mes:"error",res:[]})
    }
  });
});
app.listen(3001,()=>{console.log('listening to port 3001');
});
