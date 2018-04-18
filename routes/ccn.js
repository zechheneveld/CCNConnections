require('dotenv').load();
const express = require('express');
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

var numbers;
var addedNumbers = [];
var message;

// //Message
router.post('/', function (req, res, next) {
    console.log(req.body);
    res.send({messageFromServer: 'Got message!'});
    message = req.body.message;
    console.log(addedNumbers);
    console.log(req.body.message);

if (req.body.number != '1'){
    addedNumbers.push(req.body.number);

} else {
    console.log("no number")
}

//Numbers
// router.post('/', function (req, res, next) {
//     console.log(req.body);
//     res.send({messageFromServer: 'Got number!'});
//     addedNumbers.push(req.body.number);
//     console.log(addedNumbers);



const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    process.env.TWILIO_MESSAGING_SERVICE_SID
);
const body = 'both working';


if (message != '') {
    numbers = addedNumbers;


    // ['15189323461', '16027906734', '17143922107', '15309493838', '14803041092','15189323461'];


    Promise.all(
        numbers.map(numbers => {
            return twilio.messages.create({
                to: numbers,
                from: process.env.TWILIO_MESSAGING_SERVICE_SID,
                body: message
            });
        })
    )


        .then(messages => {
            console.log('Messages sent!');
        })
        .catch(err => console.error(err));
} else {
    req.flash('success', 'Contact Updated');

    console.log("number added")
}
});


router.get('/', function (req, res, next) {

});

module.exports = router;