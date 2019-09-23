const Movie = require('../movie');
const mongoose = require('mongoose');

describe('Movie model', () => {
  it('valid model for all movie object properties', () => {
    const model = {
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
    const movie = new Movie(model);
    const errors = movie.validateSync();
    expect(errors).toBeUndefined();

    const json = movie.toJSON();
    expect(json).toEqual({
      ...model,
      _id: expect.any(Object),
    });
  });
  it('validates required object properties', () => {
    const model = {};
    const movie = new Movie(model);
    const err = movie.validateSync().errors;
    console.log(err);
    expect(err.rating.kind).toBe('required');
    expect(err.name.kind).toBe('required');
  });
});