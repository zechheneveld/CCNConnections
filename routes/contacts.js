var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var Contact = require('../models/contact');

// Contact
router.get('/contact', function(req, res){
    res.render('contact');
});

// // Login
// router.get('/login', function(req, res){
//     res.render('login');
// });

// Register Contact
router.post('/contact', function(req, res){
    var group = req.body.group;
    var number = req.body.number;

    // Validation
    req.checkBody('group', 'Group is required').notEmpty();
    req.checkBody('number', 'Number is required').notEmpty();


    var errors = req.validationErrors();

    if(errors){
        res.render('contact',{
            errors:errors
        });
    } else {
        var newContact = new Contact({
            group: group,
            number:number
        });

        Contact.createContact(newContact, function(err, contact){
            if(err) throw err;
        });

        req.flash('success_msg', 'Number registered and can now be used');

        res.redirect('/contacts/contact');
    }
});



module.exports = router;
