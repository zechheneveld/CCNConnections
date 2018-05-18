var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var Contact = require('../models/contact');

// Contact
router.get('/contact', function(req, res){
    res.render('contact');
});

// Register Contact
router.post('/contact', function(req, res) {
    // var group = req.body.group;
    // var number = req.body.number;

    // Validation
    req.checkBody('group', 'Group is required').notEmpty();
    req.checkBody('number', 'Number is required').notEmpty();


    var errors = req.validationErrors();

    if (errors) {
        res.render('contact', {
            title: "Add Contact",
            errors: errors
        });
    } else {
        var contact = new Contact();
        contact.group = req.body.group;
        contact.number = req.body.number;

        contact.save(function (err) {
            if (err) {
                console.log(err);
                return;
            } else {
                req.flash('success_msg', 'Number registered');
                res.redirect('/contacts/contact');
            }
        });
    }
});

router.get("/contact", function (req, res) {
   Contact.getAll(function (data) {
       res.send(data);
       console.log(data)
   })
});


module.exports = router;
