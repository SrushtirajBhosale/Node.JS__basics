const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 5050;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("Namaskar\n")
    const q = url.parse(req.url, true).query;
    const text = q.firstName + " " + q.lastName;
    res.end(text);
});

server.listen(PORT, () => {
    console.log(`Server created successfully on ${PORT}`);
})