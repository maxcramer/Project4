const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  startTime: Number,
  endTime: Number,
  startLocation: {lat: Number, lon: Number},
  endLocation: {lat: Number, lon: Number},
  organiser: String,
  eventImage: String,
  comments: [{ username: String, content: String }]
});

module.exports = mongoose.model('Event', eventSchema);
