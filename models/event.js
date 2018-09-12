const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  startTime: Number,
  endTime: Number,
  startLocation: String,
  endLocation: String,
  organiser: String,
  eventImage: String,
  comments: [{ username: String, content: String }]
});

module.exports = mongoose.model('Event', eventSchema);
