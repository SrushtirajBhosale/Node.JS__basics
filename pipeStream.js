const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
// const rstream = fs.createReadStream('./API/data.json');
// rstream.pipe(res);
// console.log('Listening on port 8080')
// or
    const rstream = fs.createReadStream(`${__dirname}/API/data.json`);
    rstream.pipe(res);
    // console.log('Listening on port 8080');
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Listening on port 8000');
});