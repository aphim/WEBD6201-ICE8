const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    res.end('Hello WEBD6201!');
});

server.listen(3000);

console.log('Server running at http://localhost:3000/');