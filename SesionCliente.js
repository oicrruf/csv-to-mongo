const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  device_mac: {
    type: String,
    required: true
  },
  branch_office: {
    type: Number,
    required: true,
  },
  month_tz: {
    type: Number,
    required: true
  },
  day_tz: {
    type: Number,
    required: true
  },
  day_of_week_tz: {
    type: String,
    required: true
  },
  hour_tz: {
    type: Number,
    required: true
  },
  conection_date: {
    type: Date
  },
  visitor: {
    type: Boolean,
    required: true
  },
  tiempodeses: {
    type: Number,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model('clientSession', schema);