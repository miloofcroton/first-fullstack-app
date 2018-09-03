const client = require('../db-client');

const states = require('../data/states.json');

Promise.all(
  states.map(state => {
    return client.query(`
      INSERT into states (name, abbrev, motto, capitol, demonym, governor, landlocked)
      Values ($1, $2, $3, $4, $5, $6, $7);
    `,
    [state.name, state.abbrev, state.motto, state.capitol, state.demonym, state.governor, state.landlocked]
    );
  })
)
  .then(
    () => console.log('seeding states successful'),
    err => console.error(err)
  )
  .then(() => client.end());
