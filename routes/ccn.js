require('dotenv').load();
const express = require('express');
const router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//TWS: Why have these declared up here when you do it again below in the POST route?
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

//TWS: Pulls in schema for contact model which already handles Mongo connection.
var Contact = require('../models/contact');

var numbers;
var addedNumbers = [];
var message;
var groupSend;
var numberGroup;

//TWS: Not sure what this is doing. Doesn't seem to be called at any point.
module.exports.getAll = function(callback){
    var query1 = {group: "Families"};
    db.db('loginapp').collection('contacts').find(query1).toArray(function (err, result) {
        if (err) throw err;
        console.log("result " + result);
        db.close();
    });
    Contact.find({}, callback);
};

module.exports.createContact = function(newContact, callback) {
    console.log("test ccn " + newContact);
};

router.get('/contact', function(req, res){
    res.render('contact');
});

// //Message
router.post('/', function (req, res, next) {
    //TWS: Below line references the 'Contact' model and tells app to go find all contacts with Families Group.
    Contact.find({group: "Families"}, function(err, contacts){
        if (err) throw err;
        console.log(contacts);
        contacts.forEach(contact=> { //TWS: ForEach loop iterating through the contacts array created from DB query.
            console.log(contact.number) //TWS: contact.number targets the number field for each contact in the array
        });
    });
});


// router.post('/', function (req, res, next) {
//     res.send({messageFromServer: 'Got message!'});
//     message = req.body.message;
//     groupSend = req.body.groupSend;
//     console.log("groupSend " + req.body.groupSend);
//     if (req.body.number != null){
//         addedNumbers.push(
//             req.body.number,
//             req.body.group
//         );
//     //     numberGroup = req.body.group;
//         console.log("addedNumbers: " + req.body.group);
//         var errors = req.validationErrors();
//         if(errors){
//             res.render('contact',{
//                 errors:errors
//             });
//         } else {
//             var newContact = new Contact({
//                 number:req.body.number,
//                 group: req.body.group
//             });
//             Contact.createContact(newContact, function(err, contact){
//                 if(err) throw err;
//                 console.log(contact);
//                 // addedNumbers.push(contact)
//             });
//             req.flash('success_msg', 'Number added');
//         }
//     } else {
//         console.log("no number");
//     }
//     // TWILIO Functionality
//     const twilio = require('twilio')(
//         process.env.TWILIO_ACCOUNT_SID,
//         process.env.TWILIO_AUTH_TOKEN,
//         process.env.TWILIO_MESSAGING_SERVICE_SID
//     );
//     if (message != '') {
//         //     console.log("if " + groupSend + " = " + addedNumbers.group[i]);
//         // if (groupSend == addedNumbers.group) {
//             numbers = addedNumbers;
//             Promise.all(
//                 numbers.map(numbers => {
//                     return twilio.messages.create({
//                         to: numbers,
//                         from: process.env.TWILIO_MESSAGING_SERVICE_SID,
//                         body: message
//                     });
//                 })
//             )
//             .then(messages => {
//                 console.log('Messages sent!');
//                 req.flash('success', 'Message Sent');
//             })
//             .catch(err => console.error(err));
//     } else {
//             req.flash('success', 'Contact added');
//             console.log("number added");
//             return null;
//         }
//
//     // }else  {
//     //     return null;
//     // }
// });


router.get('/', function (req, res, next) {
});

module.exports = router;