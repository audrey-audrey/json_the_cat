// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  // Test case 1 for when breedName is valid
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  // Test case 2 for when breedName is non-existant and error is expected
  it('returns an error description for an invalid breed, via callback', (done) => {
    fetchBreedDescription('random', (err, desc) => {
      // we expect error to say Breed not found!
      assert.equal(err, 'Breed not found!');

      const expectedDesc = null;

      // compare returned description, should be null
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});