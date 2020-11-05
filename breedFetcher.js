const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  
  const requestedURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(requestedURL, function(error, response, body) {
    // print out error if URL is broken
    if (error) console.log('Error: ', error);
    else {
      const data = JSON.parse(body);
      const desc = data[0].description
  
      // if data is empty, print out message
      if (desc.length === 0) console.log('Breed not found!!');
      else console.log(desc);
    }
  });

};


module.exports = {fetchBreedDescription};
