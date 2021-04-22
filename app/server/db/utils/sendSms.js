var twilio = require('twilio');

require('dotenv').config()

var accountSid = process.env.TWILO_SID;
var authToken = process.env.TWILO_APIKEY;

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'bb tu me manque <3',
    to: '+33695244861',  // Text this number
    from: '+12058989883' // From a valid Twilio number
})
.then((message) => console.log(message.sid));