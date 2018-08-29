
//postgres user info:
// username = postgres, password = password

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:password@localhost:5432/mathology';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS structures (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        color VARCHAR(256),
        type VARCHAR(256),
        ordered BOOLEAN,
        elements INTEGER
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });