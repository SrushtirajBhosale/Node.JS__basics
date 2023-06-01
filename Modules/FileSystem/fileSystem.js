const fs = require('fs');

fs.writeFileSync('./sample1.txt',"first node file");
console.log("Namaste");

fs.readFile('./sample.txt', () => {
    console.log("readed");
})
fs.readFile("./sample1.txt", 'utf-8', (err,data) => {
    if(err) {
        throw err;
    }
    console.log(data);
})

fs.writeFile('./sample2.txt', 'next one', () => {
    console.log("created");
});

fs.unlink('./sample2.txt', () => {
    console.log("deleted");
});

fs.rename('./sample1.txt', './sample3.txt', () => {
    console.log("renamed");
})

fs.unlinkSync('./sample3.txt');

fs.appendFile("./sample.txt", ", file one updated", () => {
    console.log("appended");
})

fs.writeFile('./sample.txt', "Updated first node file", () => {
    console.log("updated");
})
