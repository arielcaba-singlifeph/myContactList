var mongoose = require('mongoose');

var PersonSchema = mongoose.Schema({    
    name: String,
    address: String,
    mobile: Number
});

var Person = mongoose.model('Person', PersonSchema);

module.exports = Person;