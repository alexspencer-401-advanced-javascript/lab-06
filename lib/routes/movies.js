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
  .get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
      .then(movie => res.json(movie))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(movie => res.json(movie))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
      .then(movie => res.json(movie))
      .catch(next);
  });

module.exports = router;