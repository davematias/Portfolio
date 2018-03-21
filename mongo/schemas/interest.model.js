const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterestSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Interest', InterestSchema);
