const client = require('../db-client');

const cities = require('../data/cities.json');

Promise.all(
  cities.map(city => {
    return client.query(`
      INSERT into cities (
        node_1, node_2, node_1_id, node_2_id, name, color, directed
      )
      SELECT

        id as parent_id,
        $1 as name,
        $2 as color
      FROM nodes
      WHERE node_1 = $1 AND node_2 = $2;
    `,
    [city.name, city.color, city.parent]
    );
  })
)
  .then(
    () => console.log('seeding cities successful'),
    err => console.error(err)
  )
  .then(() => client.end());
