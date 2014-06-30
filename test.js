var http = require('http');
var util = require('util');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(util.inspect(req));
}).listen(3000, '23.253.210.193');
console.log('Server running at http://23.253.210.193:3000/');

