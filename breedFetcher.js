const request = require('request');

/**
 * Parameters for fetchBreedDescription
 * @param {*} breedName - user specified breed
 * @param {*} callback - error handling, throw print error or print description of breed
 */
const fetchBreedDescription = function(breedName, callback) {
  
  const requestedURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(requestedURL, function(error, response, body) {
    // print out error if URL is broken
    if (error) callback(error, null); // => callback for error
    else {
      // if data is empty, print out message
      const data = JSON.parse(body);

      if (data.length === 0) {
        const errMessage = 'Breed not found!';
        callback(errMessage, null);
      } else {
        const breedDescription = data[0].description;
        callback(null, breedDescription);
      }
    }
  });

};


module.exports = {fetchBreedDescription};
