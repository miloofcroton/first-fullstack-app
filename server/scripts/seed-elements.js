const client = require('../db-client');

const structures = require('../data/elements.json');

Promise.all(
  structures.map(element => {
    return client.query(`
      INSERT into elements (
        parent_id, name, color
      )
      SELECT
        id as parent_id,
        $1 as name,
        $2 as color
      FROM structures
      WHERE name = $3;
    `,
    [element.name, element.color, element.parent]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
