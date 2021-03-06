const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

const html = "<h1>Hello World!</h1>"

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});