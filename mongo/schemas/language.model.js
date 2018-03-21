/**
 * Schema for the a language item
 * It includes the language name and usage level
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Language', LanguageSchema);
