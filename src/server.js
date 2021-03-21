const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

app.use(cors());

if (process.env.PROD) {
  app.use(express.static(path.join(__dirname, '../../public_html')));
}

// Bodyparser Middleware
app.use(express.json());

app.use('/users', require('./routes/api/users'));
app.use('/categories', require('./routes/api/categories'));
app.use('/spendings', require('./routes/api/spendings'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
