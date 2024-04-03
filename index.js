const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/api/index.js');
//const dotenv = require('dotenv');
//const connectDB = require('./config/db');

const PORT = process.env.PORT || 3001;
const app = express();
//dotenv.config();
//connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});