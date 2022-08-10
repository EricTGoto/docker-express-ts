"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const pancakes = require('./data/pancakes');
const app = (0, express_1.default)();
app.get('/', (request, response) => {
    response.json('HELLO WORLD');
});
app.get('/pancakes', (request, response) => {
    response.json(pancakes);
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`running server on ${PORT}`);
});
