const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS nodes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL UNIQUE,
      color VARCHAR(256),
      elements INTEGER
    );
    CREATE TABLE IF NOT EXISTS edges (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      color VARCHAR(256),
      node_1 VARCHAR(256) NOT NULL REFERENCES nodes(name),
      node_2 VARCHAR(256) NOT NULL REFERENCES nodes(name),
      node_1_id INTEGER NOT NULL REFERENCES nodes(id),
      node_2_id INTEGER NOT NULL REFERENCES nodes(id),
      directed BOOLEAN
    );
  `)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });