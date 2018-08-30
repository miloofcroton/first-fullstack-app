

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:password@localhost:5432/mathology';
const client = new Client(databaseUrl);


const fs = require('fs');
const dataPath = 'data/structures.json';
function readData() {
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  return data;
}
const seedData = readData();

seedData.forEach((item) => {
  client.connect()
    .then(() => {
      client.query(`
          INSERT INTO structures (name, color, type, ordered, elements)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *;
        `,
      [item.name, item.color, item.type, item.ordered, item.elements]
      );
    })
    .then(
      () => console.log('seeding row complete'),
      err => console.log(err)
    )
    .then(() => {
      client.end();
    });
});  



