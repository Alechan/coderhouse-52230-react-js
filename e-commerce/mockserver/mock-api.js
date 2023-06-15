const path = require('path')
const express = require('express')

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mockserver/db.json');
const middlewares = jsonServer.defaults();

// Avoid CORS issues
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

