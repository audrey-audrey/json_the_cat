const request = require('request');

const specifiedBreed = process.argv.slice(2);
const requestedURL = `https://api.thecatapi.com/v1/breeds/search?q=${specifiedBreed}`

request(requestedURL, function (error, response, body) {
  // print out error if URL is broken
  if (error) console.log('Error: ', error);
  else {
    const data = JSON.parse(body)

    // if data is empty, print out message
    if (data.length === 0) console.log('Breed not found!!');
    else console.log(data[0].description);
  }
});

