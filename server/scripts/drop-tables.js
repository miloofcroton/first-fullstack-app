
const client = require('../db-client');

client.query(`
    DROP TABLE IF EXISTS cities;
    DROP TABLE IF EXISTS states;
  `)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });