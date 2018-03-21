const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
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
  }
});

module.exports = mongoose.model('History', HistorySchema);
