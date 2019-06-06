const express = require('express');
const helmet = require('helmet')

const dishesRouter = require('../routers/dishes-router')

const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/dishes', dishesRouter)

module.exports = server;