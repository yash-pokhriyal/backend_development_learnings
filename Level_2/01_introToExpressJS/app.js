// Core Module
const http = require('http');

// Importing Express Module
const express = require('express');

const app = express()

const server = http.createServer(app)


const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

