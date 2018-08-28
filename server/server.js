
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


/* TEMP DATABASE SOLUTION */

// temp solution to updating data...
const fs = require('fs');
// fs file paths are relative to pwd (cwd) aka where you started node
// path to data file:
const dataPath = 'data/structures.json';

function readData() {
  // convenient method for reading file.
  // DON'T ever use in production
  const raw = fs.readFileSync(dataPath);
  // make into js array with neighborhood objects
  const data = JSON.parse(raw);

  return data;
}

/* ROUTES */

// setup a "route":
// 1) HTTP METHOD, i.e. app.get === for GET requests
// 2) PATH, i.e. '/api/neighborhoods` === the requested path
app.get('/api/structures', (req, res) => {
  const data = readData();
  // send back the data:
  res.send(data);
});

// app.<method>(<path>, handler)
app.post('/api/structures', (req, res) => {
  const data = readData();
  data.push(req.body);
  // save file
  fs.writeFileSync(dataPath, JSON.stringify(data));

  res.send(req.body);
});

/* RUN THE SERVER */

// set the PORT on which to listen
const PORT = 3000;

// start "listening" (run) the app (server)
app.listen(PORT, () => console.log('app running...'));