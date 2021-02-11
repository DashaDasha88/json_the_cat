const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const catAPI = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(catAPI, (error, resp, body) => {


    if (error) {
      callback(`Failed to request details: ${error}`,null);
    }

    const data = JSON.parse(body);

    const breed = data[0];
    if (breed) {
      callback(null,breed.description);
    } else {
      callback(`Failed to find breed ${breedName}`,null);
    }
  });

};

module.exports = { fetchBreedDescription };