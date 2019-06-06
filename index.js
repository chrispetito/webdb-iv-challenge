const express = require('express');
const server = require('./api/server');

server.use(express.json());

const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})