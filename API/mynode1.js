const http = require('http');
const fs = require('fs');


http.createServer(function(req, res){
    // const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8")    //or
    //     const jsonObj = JSON.parse(data);

    // console.log(req.url);     //try to add url like about page     (Routing in Node.js)
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end('Home page');
    }else if(req.url == '/about'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end('AboutUs');
    }else if(req.url == '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        fs.readFile(`${__dirname}/data.json`, "utf-8", (err, data) => {     //or^
            // console.log(data);
            const jsonObj = JSON.parse(data);
            res.write(jsonObj[5].address.city + '\n');
            res.write(jsonObj[7].website + '\n');
            res.write(jsonObj[1].username + '\n\n\n')
            res.end(data);
        });
    }else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('<h1>404 Page Not Found</h1>');
    }
    // res.writeHead(200,{'Content-Type':
    // 'text/html'})
    // res.end('Namaste World!')
    
}).listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000');
});
