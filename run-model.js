require('dotenv').config();
const connect = require('./lib/connect');
const mongoose = require('mongoose');

connect();

const Movie = require('./lib/models/movie');

Movie.create({
  name: 'Titanic',
  rating: 'PG-13',
  yearReleased: 1997,
  locations: {
    secondaryLocations: 'The Ocean'
  }
})
  .then(createdMovie => {
    console.log(createdMovie);
  })
  .then(() => {
    mongoose.disconnect();
  });