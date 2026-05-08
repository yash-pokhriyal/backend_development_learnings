// Core Module
const http = require('http');

// Importing Express Module
const express = require('express');

const app = express()

// Adding middleware
app.use((req,res,next)=>{
    console.log("Came in first middleware",req.url,req.method);
    // sending response
    res.send("<p>Welcome to complete coding nodejs series</p>");
    next(); 
});
app.use((req,res,next)=>{
    console.log("Came in second middleware",req.url,req.method);
});

 
const server = http.createServer(app)


const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

