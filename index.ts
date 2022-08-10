require('dotenv').config();
import express, { Express, Request, Response } from 'express';
const pancakes = require('../data/pancakes');
const app: Express = express();

app.get('/', (request: Request, response: Response) => {
  response.json('HELLO WORLD');
});

app.get('/pancakes', (request: Request, response: Response) => {
  response.json(pancakes);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`running server on ${PORT}`)
});
