const http = require('http');
const fs = require('fs')
const content = 'Some content!'

const server = http.createServer((req, res) => {
    fs.appendFileSync('../song', 'data to append');
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
})

server.listen(3000);
