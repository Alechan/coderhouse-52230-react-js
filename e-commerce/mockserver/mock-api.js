var path = require('path')
var express = require('express')
var jsonServer = require('json-server')
var demodata = require('./db.json')
const middlewares = jsonServer.defaults();

var router = jsonServer.router(demodata)
var server = jsonServer.create()

// Avoid CORS issues
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


server.use('/assets', express.static(path.join(__dirname, 'assets')))
server.use(router)

// Add "synthetic" delay to all requests
server.use((req, res, next) => {
    let seconds = 1000;
    setTimeout(next, 3* seconds);
});

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});
