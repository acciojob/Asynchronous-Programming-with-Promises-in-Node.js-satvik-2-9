const https = require('https');

const searchTerm = process.argv[2];

function fetchData(searchTerm) {
  return new Promise((resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${searchTerm}`;

    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(`API request failed with status code ${res.statusCode}`);
        }
      });

      res.on('error', (error) => {
        reject(`Error fetching data from API: ${error.message}`);
      });
    });
  });
}

fetchData(searchTerm)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = { fetchData }; // Export for testing purposes
