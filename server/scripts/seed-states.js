const client = require('../db-client');

const states = require('../data/states.json');

Promise.all(
  states.map(state => {
    return client.query(`
      INSERT into states (name, color, elements)
      Values ($1, $2, $3);
    `,
    [state.name, state.color, state.elements]
    );
  })
)
  .then(
    () => console.log('seeding states successful'),
    err => console.error(err)
  )
  .then(() => client.end());
