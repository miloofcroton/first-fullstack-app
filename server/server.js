// express for serving, morgan for logging, cors for cors
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// initialize all three, plus express.json for reading json body
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//connect to database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:password@localhost:5432/mathology';
const client = new Client(databaseUrl);
client.connect();


// routes
app.get('/api/structures', (req, res) => {
  client.query(`
    SELECT
      id,
      name,
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

app.post('/api/structures', (req, res) => {
  console.log('posting');
  const body = req.body;

  client.query(`
    INSERT INTO structures (name, type, ordered, elements)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.name, body.type, body.ordered, body.elements]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));