const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS states (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL UNIQUE,
      abbrev VARCHAR(256) NOT NULL UNIQUE,
      motto VARCHAR(256),
      capitol VARCHAR(256),
      demonym VARCHAR(256),
      governor VARCHAR(256),
      landlocked BOOLEAN
    );
    CREATE TABLE IF NOT EXISTS cities (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      population INTEGER,
      landlocked BOOLEAN,
      state_id INTEGER NOT NULL REFERENCES states(id)
    );
  `)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });