/**
 * Schema for the history item
 * The history is a step in one's career, it might be school or work related
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  place: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  current: Boolean,
  startDate: {
    type: Date,
    required: true
  },
  endDate: Date,
  kind: {
    type: String,
    required: true
  },
  link: String
});

module.exports = mongoose.model('History', HistorySchema);
