const request = require('../request');
const db = require('../db');

describe('movies api', () => {

  beforeEach(() => {
    return db.dropCollection('movies');
  });

  const movieExample = {
    name: 'Gladiator',
    genre: ['action', 'drama'],
    locations: {
      mainLocation: 'Los Angeles',
      secondaryLocations: 'Rome'
    },
    yearReleased: 1991,
    inTheaters: true,
    rating: 'R',
  };

  function postMovie(movie) {
    return request 
      .post('/api/movies')
      .send(movie)
      .expect(200)
      .then(({ body }) => body);
  }

  it('posts a movie', () => {
    return postMovie(movieExample)
      .then(movie => {
        expect(movie).toEqual({
          _id: expect.any(String),
          __v: 0,
          ...movieExample
        });
      });
  });

  it('gets all movies', () => {
    return Promise.all([
      postMovie(movieExample),
      postMovie(movieExample),
      postMovie(movieExample),
      postMovie(movieExample)
    ])
      .then(() => {
        return request
          .get('/api/movies')
          .expect(200);
      })
      .then(({ body }) => {
        expect(body.length).toBe(4);
      });
  });
  it('gets a movie by id', () => {
    return postMovie(movieExample)
      .then(movie => {
        return request
          .get(`/api/movies/${movie._id}`)
          .expect(200)
          .then(({ body }) => {
            expect(body).toEqual(movie);
          });
      });
  });
  it('updates the movie by id', () => {
    return postMovie(movieExample)
      .then(movie => {
        movie.yearReleased = 1993;
        return request
          .put(`/api/movies/${movie._id}`)
          .send(movie)
          .expect(200);
      })
      .then(({ body }) => {
        expect(body.yearReleased).toBe(1993);
      });
  });
  it('deletes a movie by id', () => {
    return postMovie(movieExample)
      .then(movie => {
        return request
          .delete(`/api/movies/${movie._id}`)
          .expect(200);
      })
      .then(() => {
        return request
          .get(`/api/movies`)
          .expect(200)
          .then(({ body }) => {
            expect(body.length).toBe(0);
          });
      });
  });
});