// 1.convert to json
// 2.add to a file
// 3.read file
// 4.convert back to object
// 5.console

const myObj = {
    name: "Srushtiraj",
    last: "Bhosale",
    age: 22
}

const jsonObj = JSON.stringify(myObj);

const fs = require('fs');
fs.writeFile('json1.json', jsonObj, (err) => {
    console.log('added to file');
});

fs.readFile('json1.json', 'utf-8', (err, data) =>{
    console.log(data);
    const objData = JSON.parse(jsonObj);
    console.log(objData);
})

    
// Result:
// {"name":"Srushtiraj","last":"Bhosale","age":22}
// { name: 'Srushtiraj', last: 'Bhosale', age: 22 }