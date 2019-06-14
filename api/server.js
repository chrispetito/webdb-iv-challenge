const express = require('express');
const helmet = require('helmet')

const dishesRouter = require('../routers/dishes-router')
const recipesRouter = require('../routers/recipes-router')

const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/dishes', dishesRouter)
server.use('/api/recipes', recipesRouter)

module.exports = server;