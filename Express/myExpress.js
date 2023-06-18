const express = require('express');
const app = express();

        // Express Js routing

app.get('/', (req, res) => {                   // takes two parameters (route, callback)
    res.send('Namaste World from Srushtiraj');
});

app.get('/about', (req, res) => {
    res.send('AboutUs page');
});

app.listen(8888, () => {
    console.log('Listening on port 8888');
});