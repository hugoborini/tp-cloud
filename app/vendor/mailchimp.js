var Mailchimp = require('mailchimp-api-v3')

var mailchimp = new Mailchimp('ah6HfuQ7xKLYmeeWyeL6Ow');

const run = async () => {
  const response = await mailchimpClient.exports.info({ id: "id" });
  console.log(response);
};

run();