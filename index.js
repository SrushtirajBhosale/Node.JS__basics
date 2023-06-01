// user defined module
// const mod = require('./userModule');

// mod.sum(7, 7);
// mod.avg(7, 7);

const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./pages/Home.html');
const aboutPage = fs.readFileSync('./pages/About.html');
const contactPage = fs.readFileSync('./pages/Contact.html');

const PORT = process.env.PORT ||  8080;

const server = http.createServer((req,res) => {
    // console.log(req.url);
    // console.log(req.method);
    // res.end("Namaste");
    if (req.url == '/') {
        return res.end(homePage)
    }
    if (req.url == '/about') {
        return res.end(aboutPage)
    }
    if (req.url == '/contact') {
        return res.end(contactPage)
    }

});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})

