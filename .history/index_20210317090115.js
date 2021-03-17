const http = require('http');

const PORT = 3000;
const HOST = "localhost";

http.createServer((req, res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    res.end('Hello WEBD6201!');
});

server.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);