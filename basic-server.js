/* Import node's http module: */
const http = require('http');
//const handleRequest = require('./request-handler.js')
const fs = require('fs')
const dbMessages = require('./server/classes/messages.js');
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Max-Age", 10);
    next();
});
//app.use(express.static('client'));
app.use(express.static('client'));
// app.use('./client', express.static('styles'));
//my code-v

app.get('/', (req,res) => res.sendFile(path.join(__dirname + '/client/index.html')));
app.get('/classes/messages', (req, res) => res.status(200).json(dbMessages));
app.options('/classes/messages', (req, res) => res.status(200).json(JSON.stringify(dbMessages)));
app.post('/classes/messages', (req,res) => {
    console.log("attempting post");
    res.status(201);
    let data = [];
    req.on('data', chunk => {
      data.push(chunk);
    });
    req.on('end', () => {
      dbMessages.results.push(JSON.parse(data));
      console.log('stringified dbMessages', JSON.stringify(dbMessages));
      console.log('data: ', data)
      res.json(dbMessages);
    });
});


app.listen(port, '127.0.0.1', () => console.log(`Listening on port ${port}!`));

// Every server needs to listen on a port with a unique number. The
// standard port for HTTP servers is port 80, but that port is
// normally already claimed by another server and/or not accessible
// so we'll use a standard testing port like 3000, other common development
// ports are 8080 and 1337.
//var port = 3000;

// For now, since you're running this server on your local machine,
// we'll have it listen on the IP address 127.0.0.1, which is a
// special address that always refers to localhost.
//var ip = '127.0.0.1';



// We use node's http module to create a server.
//
// The function we pass to http.createServer will be used to handle all
// incoming requests.
//
// After creating the server, we will tell it to listen on the given port and IP. */
// var server = http.createServer(handleRequest.requestHandler);
// console.log('Listening on http://' + ip + ':' + port);
// server.listen(port, ip);

// To start this server, run:
//
//   node basic-server.js
//
// on the command line.
//
// To connect to the server, load http://127.0.0.1:3000 in your web
// browser.
//
// server.listen() will continue running as long as there is the
// possibility of serving more requests. To stop your server, hit
// Ctrl-C on the command line.

