const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(staticPath));

const staticPath = path.join(__dirname, '../Public')

path.basename('')
console.log(__filename);
console.log(__dirname);


app.listen(8080, () => {
    console.log('Listening on port 8080..');
});