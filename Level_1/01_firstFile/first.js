// console.log("Hello World");
// node file.js | to run the code in terminal


// fs module
// require keyword load the built-in,third-party,custom module
const fs = require('fs');

// to write a file
fs.writeFile('output.txt','Writing file',(err)=>{
    if(err) console.log('Error occured');
    else console.log('File written successfylly')
})

// REPL read eval print loop | Quick testing
// terminal : node
// jese hi band kia vese hi sab clear

