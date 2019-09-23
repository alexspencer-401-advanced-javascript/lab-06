const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  genre: [{
    type: String,
    required: true,
    enum: ['comedy', 'horror', 'drama', 'action', 'romantic comedy']
  }],
  yearReleased: {
    type: Number,
    min: 0,
  },
  inTheaters: {
    type: Boolean,
    default: true
  }

});

module.exports = mongoose.model('Movies', schema);