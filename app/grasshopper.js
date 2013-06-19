var express = require('express'),
    fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');