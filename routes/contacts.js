var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Person = require('../models/person')

var person = new Person();

router.get('/:name', function(req, res, next) {    
  Person.findOne({'name': 'Precil' }, function(err, person) {
    if(err) { res.send(err) };
      res.render('contact', { person : person});
      
    });  
});

module.exports = router;
