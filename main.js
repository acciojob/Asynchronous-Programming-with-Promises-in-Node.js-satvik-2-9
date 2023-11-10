const https = require('https');

const searchTerm = process.argv[2];

function fetchData(searchTerm) {
  // TODO: Implement the Promise-based function to fetch data from the API based on the search term
  
}

fetchData(searchTerm)
  .then((data) => {
    // TODO: Process the retrieved data
  })
  .catch((error) => {
    // TODO: Handle any errors that occur during the API request
  });
