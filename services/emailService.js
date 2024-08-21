// services/emailService.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

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
