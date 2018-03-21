const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CertificationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Certification', CertificationSchema);
