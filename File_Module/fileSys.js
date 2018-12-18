// ****Note MAKE Super Permission EXM: sudo node fileSys.js ****

var fs = require('fs');
// // **Real procedure to read write file.. 
// let readString = fs.readFileSync('testing.txt', 'utf8');
// console.log(readString);
// fs.writeFileSync('test2.txt', readString);

// // \\Better way read a file
// var read_String = fs.readFileSync('testing.txt', 'utf8', function(err, data){
//     if (err)
//      return console.error(err)
    
//      console.log(data)
// })
// console.log("the file is read")

// // **Delete a File
// fs.unlink('testing.txt', () => console.log('Done'))

// // **Make A New Directory
// fs.mkdir('Test', function() {console.log('done')})

// // **Remove a Directory
// fs.rmdir('Test',() => console.log("Done"))

// ?? Make Some Advanced Work

var DataString = '\n';

for(let i=1; i < 10; i++){
    DataString += `This is Imran... ${i} number printed \n`
}

fs.mkdir('AD_File', function() {
    fs.writeFileSync('./AD_File/test2.txt', DataString)
})