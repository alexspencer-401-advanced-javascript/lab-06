require ('dotenv').config();
require('./lib/connect')();
const express = require('express');
const app = express();
const Movie = require('./lib/models/movie');

app.use(express.json());

app.get('/api/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.json(movies);
    })
    .catch(next);
});

app.get('/api/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.json(movie);
    })
    .catch(next);
});

app.post('/api/movies', (req, res, next) => {
  Movie.create(req.body)
    .then(movie => {
      res.json(movie);
    })
    .catch(next);
});

app.put('/api/movies/:id', (req, res, next) => {
  Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .then(movie => {
      res.json(movie);
    })
    .catch(next);
});

app.delete('/api/movies/:id', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(removed => {
      res.json(removed);
    })
    .catch(next);
});

app.listen(3000, () => console.log('server running on 3000'));