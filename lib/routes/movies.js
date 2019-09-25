// eslint-disable-next-line new-cap
const router = require('express').Router();
const Movie = require('../models/movie');

router
  .post('/', (req, res, next) => {
    Movie.create(req.body)
      .then(movie => res.json(movie))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Movie.find()
      .then(movies => res.json(movies))
      .catch(next);
  })
 

module.exports = router;