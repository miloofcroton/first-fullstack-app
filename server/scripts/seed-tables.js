

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:password@localhost:5432/mathology';
const client = new Client(databaseUrl);


const fs = require('fs');
const seedPath = 'data/structures.json';
function readSeed() {
  const raw = fs.readFileSync(seedPath);
  const data = JSON.parse(raw);
  return data;
}
const seedData = readSeed();

var promises = [];
promises.push(client.connect());

seedData.forEach((item) => {
  promises.push(
    client.query(`
      INSERT INTO structures (name, color, type, ordered, elements)
      VALUES ($1, $2, $3, $4, $5)
    `,
    [item.name, item.color, item.type, item.ordered, item.elements]
    )
  );
});

Promise.all(promises)

  .then(
    () => console.log('seeding row complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
  



