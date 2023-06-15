const path = require('path')
const express = require('express')

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mockserver/db.json');
const middlewares = jsonServer.defaults();

// Add "sync" delay to all requests
server.use((req, res, next) => {
    let seconds = 1000;
    setTimeout(next, 2* seconds); // 2-second delay
});

server.use('/assets', express.static(path.join(__dirname, 'assets')))
server.use(middlewares);
server.use(router);

server.listen(3001, () => {
    console.log('JSON Server is running');
});

