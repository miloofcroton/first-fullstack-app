// express for serving, morgan for logging, cors for cors
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// initialize all three, plus express.json for reading json body
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// connect to database
const client = require('./db-client');

// routes
app.get('/api/structures', (req, res) => {
  client.query(`
    SELECT
      id,
      name,
      color,
      type,
      ordered,
      elements
    FROM structures;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/structures/:id', (req, res) => {
  client.query(`
    SELECT
      id,
      name,
      color,
      type,
      ordered,
      elements
    FROM structures
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.post('/api/structures', (req, res) => {
  console.log('posting');
  const body = req.body;

  client.query(`
    INSERT INTO structures (name, color, type, ordered, elements)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.color, body.type, body.ordered, body.elements]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.put('/api/structures/:id', (req, res) => {
  console.log('updating');
  const body = req.body;

  client.query(`
    UPDATE structures 
    SET 
      name=$1, 
      color=$2, 
      type=$3, 
      ordered=$4,
      elements=$5
    WHERE id = $6
    RETURNING *;
  `,
  [body.name, body.color, body.type, body.ordered, body.elements, req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.delete('/api/structures/:id', (req, res) => {
  console.log('deleting');

  client.query(`
    DELETE FROM structures 
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(() => {
      res.send({ removed: true });
    })
    .catch(err => console.log(err));
});




// start "listening" (run) the app (server)
const PORT = 3000;
app.listen(PORT, () => console.log('app running on', PORT));