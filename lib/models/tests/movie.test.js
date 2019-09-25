// const Movie = require('../movie');
// // const mongoose = require('mongoose');

// describe('Movie model', () => {
//   it('valid model for all movie object properties', () => {
//     const model = {
//       name: 'Gladiator',
//       genre: ['action', 'drama'],
//       locations: {
//         mainLocation: 'Los Angeles',
//         secondaryLocations: 'Rome'
//       },
//       yearReleased: 1991,
//       inTheaters: true,
//       rating: 'R',
//     };
//     const movie = new Movie(model);
//     const errors = movie.validateSync();
//     expect(errors).toBeUndefined();

//     const json = movie.toJSON();
//     expect(json).toEqual({
//       ...model,
//       _id: expect.any(Object),
//     });
//   });
//   it('validates required object properties', () => {
//     const model = {};
//     const movie = new Movie(model);
//     const err = movie.validateSync().errors;
//     expect(err.rating.kind).toBe('required');
//     expect(err.name.kind).toBe('required');
//     expect(err['locations.secondaryLocations'].kind).toBe('required');
//   });
//   it('populates default properties', () => {
//     const model = {
//       name: 'Gladiator',
//       yearReleased: 1991,
//       locations: {
//         secondaryLocations: 'Rome'
//       },
//       rating: 'R',
//     };
//     const movie = new Movie(model);
//     const err = movie.validateSync();
//     expect(err).toBeUndefined();
//     expect(movie.inTheaters).toBe(true);
//   });
//   it('ensure conformity to min year', () => {
//     const model = {
//       yearReleased: -10
//     };
//     const movie = new Movie(model);
//     const err = movie.validateSync(model).errors;
//     expect(err.yearReleased.kind).toBe('min');
//   });
//   it('enforces enum on genre', () => {
//     const model = {
//       genre: ['yahoo']

//     };
//     const movie = new Movie(model);
//     const { errors } = movie.validateSync();
//     console.log(errors);
//     expect(errors['genre.0'].kind).toBe('enum');
//   });
// });