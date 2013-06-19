/*
 * Features

 Built on Connect
 Robust routing
 HTTP helpers (redirection, caching, etc)
 View system supporting 14+ template engines
 Content negotiation
 Focus on high performance
 Environment based configuration
 Executable for generating applications quickly
 High test coverage

 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');