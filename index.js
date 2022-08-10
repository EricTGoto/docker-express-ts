require('dotenv').config();
const express = require('express');
const pancakes = require('./data/pancakes');
const app = express();

app.get('/', (request, response) => {
  response.json('HELLO WORLD');
});

app.get('/pancakes', (request, response) => {
  response.json(pancakes);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`running server on ${PORT}`)
});
