var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */ //this just gets the root
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); 
  //message: "Welcome to your first Express app" });
});

//copied the top one. dynamic placeholder 
router.get('/:user', function(req, res, next) {
  console.log('data:',data);
  console.log('user:',req.params.user);
  res.render('userpage', data[req.params.user]);
});
module.exports = router;