const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

app.use(cors());

if (process.env.PROD) {
  app.use(express.static(path.join(__dirname, '../../public_html')));
}

// Bodyparser Middleware
app.use(express.json());

mongoose.connect(
    process.env.ATLAS_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  .then(
    () => {console.log('database connected')},
    err => { console.log('Can not connect to the database'+ err)}
  );


app.use('/users', require('./routes/api/users'));
app.use('/spendings', require('./routes/api/spendings'));
app.use('/recurrings', require('./routes/api/recurringSpendings'));
app.use('/dashboard', require('./routes/api/dashboard'));
app.use('/monthlystats', require('./routes/api/monthlybudgetstats'));
app.use('/categories', require('./routes/api/categories'));
app.use('/colors', require('./routes/api/colors'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
