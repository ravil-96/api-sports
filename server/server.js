const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();


const app = express();
app.use(bodyParser.json());
app.use(cors());

const championRoutes = require('./controllers/champions');
app.use('/champions',championRoutes);

app.get('/', (req, res) => {
  res.send('Emmanuel and Ravil server!')
});

app.post('/', (req, res) => {
  res.status(405).send('Not allowed!');
      });      

module.exports = app;