const http = require('http');
const fs = require('fs');                                       //Detailed CRUD is at the bottom.


fs.writeFileSync('sr7.txt', 'Welcome');

fs.writeFileSync('sr7.txt', 'Welcome to Node.js');

fs.appendFileSync('sr7.txt', ' Advance level')

console.log(fs.readFileSync('sr7.txt').toString())
// or
const read = fs.readFileSync('sr7.txt');
console.log(read.toString());
// or***
console.log(fs.readFileSync('sr7.txt', 'utf-8'));

fs.renameSync("sr7.txt", "sr11.txt");

fs.unlinkSync("sr11.txt");


// Common use of file system module : CRUD



http.createServer(function(req, res){

  // Read Files:************************************

  fs.readFile('demofile.html',
    function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        // return res.end(data); 
        // or   
        res.write(data);           
        res.end();    
    }
  )
      
      
  
  // Create Files:  1.appendFile() 2.open() 3.writeFile().*******************************************************

  // 1.appendFile(). Appends specified content to a file. if the file doesn't exist, file will be created.

  fs.appendFile('sr77.txt', "Namaste World!", 
    function(err){
        if(err) 
        // throw err;
        // res.end();       //or
        {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end();
  })


  // 2.open(). method takes 'w' flag for writing as the second argument & the specified file is open for writing,if the file doesn't exist,an *empty* file will be created.
  
  fs.open('sr77.txt', 'w', function(err, file){
      if(err) throw err;
      res.end();
  })


  // 3.writeFile(). Replaces the specified file & content. if the file doesn't exist, file will be created.

  fs.writeFile('sr99.txt', 'Hello World!', function(err){
      if(err) throw err;
      res.end();
  })


  // Update File: 1.appendFile() 2.writeFile()

  // 1.appendFile(). appends specified content to a file. if the file doesn't exist, file will be created.

  fs.appendFile('sr77.txt', ' Namaskar Srushtiraj', (err) => {
      if (err) throw err;
      res.end();
  })


  // 2.writeFile(). Replaces the specified file & content. if the file doesn't exist, file will be created.

  fs.writeFile('sr99.txt', ' Hello Srushtiraj', (err) => {
      if (err) throw err;
      res.end();
  })


  // Delete Files:

  fs.unlink('sr77.txt', function(err){
      if(err) throw err;
      res.end();
  });


  // Rename Files:

  fs.rename('sr99.txt', 'sr55.txt', function(err){
      if(err) throw err;
      res.end();
  })


}).listen(8000, () => {
  console.log("server started successfully");
});




// crud:
// 1.create folder
fs.mkdir('demo', (err) => {
    console.log('1.Folder created');
});
// 2.create file
fs.open('./demo/demoFile.txt','w', (err) => {
    console.log('2.file created');
});
// // 3.create data
fs.writeFile('./demo/demoFile.txt', 'Namaste World!', (err) => {
    console.log('3.data created');
});
// 4.add data
fs.appendFile('./demo/demoFile.txt', " Its Srushtiraj here", (err) => {
    console.log('4.data added');
});
// 5.replace data
fs.writeFile('./demo/demoFile.txt', "Namaskar World!, Its Bappa here", (err) => {
    console.log('5.data replaced');
});
// 6.rename file
fs.rename('./demo/demoFile.txt', './demo/systemFile.txt', (err) => {
    console.log('file renamed');
});
// 7.read file
fs.readFile('./demo/systemFile.txt', 'utf-8', (err, data) =>{
    console.log(data);
});
// 8.delete file
fs.unlink('./demo/systemFile.txt', (err) => {
    console.log('file deleted');
});
fs.unlink('./demo/demoFile.txt', (err) => {
    console.log('file deleted');
});
// 9.delete folder
fs.rmdir('demo', (err) => {
    console.log('folder deleted');
});
