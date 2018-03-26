const fs = require('fs');
const path = require('path');

function MailConfig() {
  this.senderEmail = '';
  this.senderPassWord = '';
  this.receiverEmail = '';
}

MailConfig.prototype.load = function() {
  let devFilePath = path.join(__dirname, 'mail-config.json');
  //app is running on heroku, load data from env variables
  if(process.env.SENDER_EMAIL) {
    this.senderEmail = process.env.SENDER_EMAIL;
    this.senderPassWord = process.env.SENDER_PASSCODE;
    this.receiverEmail = process.env.DESTINATION_EMAIL;
  } else if(fs.existsSync(devFilePath)) {
    let data = JSON.parse(fs.readFileSync(devFilePath, 'utf8'));
    this.senderEmail = data.senderEmail;
    this.senderPassWord = data.senderPassWord;
    this.receiverEmail = data.receiverEmail;
  }
};

module.exports = MailConfig;