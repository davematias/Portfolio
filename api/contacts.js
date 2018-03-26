/**
 * Endpoints for contact data
 */
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const mailConfig = require('../config/mail');
const config = new mailConfig();
config.load();

/* Post contact data */
router.post('/', (req, res) => {
  console.log(config);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: config.senderEmail,
           pass: config.senderPassWord
       }
   });

  const mailOptions = {
    from: config.senderEmail,
    to: config.receiverEmail,
    subject: req.body.subject,
    html: `<p>From ${req.body.name} - ${req.body.email}</p><p>${req.body.message}</p>`
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      console.log(info);
      res.status(204).send();
    }
  });
});

module.exports = router;