// Create web server: node comment.js
// 1. Create a web server
// 2. Read the file
// 3. Write the file to the response
// 4. Listen to the port

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000);