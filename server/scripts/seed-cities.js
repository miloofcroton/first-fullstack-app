const client = require('../db-client');

const cities = require('../data/cities.json');

Promise.all(
  cities.map(city => {
    return client.query(`
      INSERT into cities (
        state_id, name, population, landlocked
      )
      SELECT
        id as state_id,
        $1 as name,
        $2 as population,
        $3 as landocked
      FROM states
      WHERE abbrev = $4;
    `,
    [city.name, city.population, city.landlocked, city.state]
    );
  })
)
  .then(
    () => console.log('seeding cities successful'),
    err => console.error(err)
  )
  .then(() => client.end());
