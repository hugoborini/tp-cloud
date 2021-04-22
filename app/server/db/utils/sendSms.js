var twilio = require('twilio');

require('dotenv').config()

var accountSid = process.env.TWILO_SID;
var authToken = process.env.TWILO_APIKEY;

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


const sendSms = (body, to) => {
    client.messages.create({
        body: body,
        to: to,  // Text this number
        from: '+12058989883' // From a valid Twilio number
    })
        .then((message) => console.log(message.sid));
}

module.exports = sendSms;
