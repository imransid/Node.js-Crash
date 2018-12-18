const http = require('http');
const fs = require('fs');
// Server configuration
const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function(req, res){
console.log('request url : ' + req.url)

if(req.url === '/index.php'){
res.writeHead(200, {'Content-Type': 'text/html'});
fs.createReadStream('./index.html').pipe(res);
}else if(req.url === '/api'){
res.writeHead(200, {'Content-Type': 'application/json' });

var jsonObj = {
  name: 'max',
  age: 23,
  number: '01754099405'
};

res.end(JSON.stringify(jsonObj));
}
}).listen(port);
console.log('server is working' + port);
