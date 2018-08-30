const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS structures (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      color VARCHAR(256),
      type VARCHAR(256),
      ordered BOOLEAN,
      elements INTEGER
    );

    CREATE TABLE IF NOT EXISTS elements (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      parent_id INTEGER NOT NULL REFERENCES structures(id),
      color VARCHAR(256)
    );
  `)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });