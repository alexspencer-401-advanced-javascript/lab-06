const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: { //TESTED
    type: String,
    required: true
  },
  genre: [{
    type: String,
    enum: ['comedy', 'horror', 'drama', 'action', 'romantic comedy']
  }],
  locations: { //TESTED
    mainLocation: String,
    secondaryLocations: {
      type: String,
      required: true
    }
  },
  yearReleased: { //TESTED
    type: Number,
    min: 0
  },
  inTheaters: { //TESTED
    type: Boolean,
    default: true
  },
  rating: { //TESTED
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Movies', schema);