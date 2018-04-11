require('dotenv').load();
const express = require('express');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    process.env.TWILIO_MESSAGING_SERVICE_SID
);
const body = 'Welcome to CCN Connections';

const numbers = ['15189323461', '16027906734', '17143922107', '15309493838'];

Promise.all(
    numbers.map(numbers => {
        return twilio.messages.create({
            to: numbers,
            from: process.env.TWILIO_MESSAGING_SERVICE_SID,
            body: body
        });
    })
)
    .then(messages => {
        console.log('Messages sent!');
    })
    .catch(err => console.error(err));
