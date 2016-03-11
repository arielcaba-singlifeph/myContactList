var express = require('express');
var router = express.Router();
var Person = require('../models/person')

var person = new Person();


router.get('/', function(req, res, next) {    
  Person.find(function(err, person) {
    if(err) { res.send(err);}
      res.render('index', { title: 'My Contact List', person : person });
    });  
});

module.exports = router;
