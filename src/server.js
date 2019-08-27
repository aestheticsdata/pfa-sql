const express = require('express');
const mongoose = require('mongoose');
// const config = require('config');
const config = require('dotenv').config();
const path = require('path');

// const db = config.get('ATLAS_URI');

mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true })
  .then(
    () => {console.log('database connected')},
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();

// Bodyparser Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('pfa yeah !');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
