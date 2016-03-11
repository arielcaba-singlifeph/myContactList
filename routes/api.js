var express = require('express');
var router = express.Router();
var Person = require('../models/person');

var person = new Person();

//  get all contacts
router.get('/contacts', function(req, res) {
    
    Person.find(function(err, person) {
        if(err) { res.send(err);}
        res.json(person);
    });
});

// get a contact by id
router.get('/contacts/:person_id', function(req, res){
    Person.findById(req.params.person_id, function(err, person){
        if (err) {return res.send(err);}
        res.json(person);    
    });
});

// add a contact
router.post('/contacts', function(req, res){

    person.name = req.body.name;
    person.address = req.body.address;
    person.mobile = req.body.mobile;
    
    person.save(function(err){        
        if (err) { return res.send(err); }
        res.json({ message : "contact added"});
    });    
});

// edit a contact
router.put('/contacts/:person_id', function(req, res){
    Person.findById(req.params.person_id, function(err, person){
        if (err) {return res.send(err);}
        person.name = req.body.name;
        person.address = req.body.address;
        person.mobile = req.body.mobile;
        
        Person.save(function(err){        
            if (err) { return res.send(err); }
            res.json({ message : "contact edited"});
        });     
    });
});

// delete a contact
router.delete('/contacts/:person_id', function(req, res){  
    
    Person.remove({_id: req.params.person_id}, function(err){        
        if (err) { return res.send(err); }
        res.json({ message : "contact deleted"});
    });    
});

module.exports = router;