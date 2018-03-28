/**
 * Schema for the portfolio item module (past projects)
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  kind: {
    type: String,
    required: true
  },
  link: String,
  screenshotLinks: Array
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
