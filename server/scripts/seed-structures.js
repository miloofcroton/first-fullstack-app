const client = require('../db-client');

const structures = require('../data/structures.json');

Promise.all(
  structures.map(structure => {
    return client.query(`
      INSERT into structures (name, color, type, ordered, elements)
      Values ($1, $2, $3, $4, $5);
    `,
    [structure.name, structure.color, structure.type, structure.ordered, structure.elements]
    );
  })
)
  .then(
    () => console.log('seeding data successful'),
    err => console.error(err)
  )
  .then(() => client.end());
