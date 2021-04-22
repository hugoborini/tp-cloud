
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = ({to, from, subject, text, html}) => {
    const msg = {
      to, // Change to your recipient
      from, // Change to your verified sender
      subject,
      text,
      html,
    }

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
}


module.exports = sendMail;
