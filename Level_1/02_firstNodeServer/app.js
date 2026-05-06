// Simple Node.js server

const http = require('http');

// function requestListener(req,res){
//     console.log(req)
// }

// http.createServer(requestListener);

// http.createServer((req,res)=>{
//     console.log(req);
// })

// createServer ek function leta hai callback
// browser hmhe request bhejega 


// server ko kaan lgake sun na hoga ki uspe client ki request aari hai kya ?
// upar hmne server bnaya par listen ni kia

const server = http.createServer((req,res)=>{
    console.log(req);
    // to exitor stop the server or event loop
    process.exit();
    // ye server tab tk sunega jb tk isko pehli request ni milti phir exit kar jaega
})

// ab sunega port no. at 3000
// server.listen(3000)

// ab sun na chalu

// to check server successfully start hogya to we use

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})


