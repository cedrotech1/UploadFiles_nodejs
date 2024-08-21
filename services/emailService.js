// services/emailService.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("");

const sendEmail = async (to, subject, text,from) => {
  const msg = {
    to,
    from,  // Your verified sender email address
    subject,
    text,
  
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    throw error;
  }
};

module.exports = sendEmail;
