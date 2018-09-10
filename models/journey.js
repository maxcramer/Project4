const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
  journeyName: String,
  city: String,
  journeyImage: String, // Make this an upload front end
  positions: [
    {lat: Number, lon: Number, time: Date}
  ],
  username: String,
  description: String,
  distance: Number,
  boardRode: { type: String, enum: [
    'OneWheel Original',
    'Onewheel Plus',
    'OneWheel XR'
  ]},
  comments: [{ username: String, content: String }]
});




module.exports = mongoose.model('Journey', journeySchema);
