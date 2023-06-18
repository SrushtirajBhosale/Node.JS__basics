const http = require('http');
const fs = require('fs');
const url = require('url');
const mod = require('./UserDefinedModule/userModule');

const PORT = process.env.PORT ||  8080;

// // user defined module
// mod.sum(7, 7);
// mod.avg(7, 7);

const homePage = fs.readFileSync('./pages/Home.html');
const aboutPage = fs.readFileSync('./pages/About.html');
const contactPage = fs.readFileSync('./pages/Contact.html');


const server = http.createServer((req,res) => {
//     // console.log(req.url);
//     // console.log(req.method);



    // query string

    res.writeHead(200, {'Comtent-type': "text/html"});
    res.end("Namaste");
    var q = url.parse(req.url, true).query;
    var txt = q.initial + " " + q.last;
    res.end(txt);
    console.log(txt);

    

    
    // file server
    let adr = 'http://localhost:8080/default.html?initial=Srushtiraj&last=Bhosale';
    let q1 = url.parse(adr, true);

    res.write(q1.host);
    res.write(q1.pathname);
    let qdata = q1.query;
    res.end(qdata.initial);
    
    // file server
    const q2 = url.parse(req.url, true);
    const fileName = '.' + q2.pathname;
    fs.readFile(fileName, (err, data) => {
        if (err) {
                res.writeHead(404, {'Comtent-type': "text/html"});
                return res.end("<h1>404 Page Not Found</h1>");
            }
            res.writeHead(200, {'Comtent-type': "text/html"});
        return res.end(data);
    })

    
    
    
    //API
    fs.readFile('./details.json', (err, data) => {
            console.log(req.method);
            if (err) {
                    res.end("<h1>404 Page Not Found");
                }
                // const jsonObj = JSON.parse(data);
        // res.write(jsonObj[0].address.city + '\n');
        // res.write(jsonObj[1].age + '\n\n\n');
        res.end(data);
    })
    
    // router

    if (req.url == '/') {
        return res.end(homePage)
    }
    if (req.url == '/about') {
        return res.end(aboutPage)
    }
    if (req.url == '/contact') {
        return res.end(contactPage)
    }
    else {
        return res.end("404 Page Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})
