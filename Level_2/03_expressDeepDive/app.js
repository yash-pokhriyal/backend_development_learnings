// no need for core module http we can direct listen using app.listen()
const express = require('express');

const app = express()

// Adding middleware
// handling routes

// path based handling | ('/') universal

// app.use('/',(req,res,next)=>{
//     console.log("Came in first middleware",req.url,req.method);
//     next(); 
// });
// app.use('/submit-details',(req,res,next)=>{
//      // sending response
//     res.send("<p>Welcome to complete coding nodejs series</p>");
//     console.log("Came in second middleware",req.url,req.method);
// });


// request method based routing 

app.get('/',(req,res,next)=>{
    console.log("Came in first middleware",req.url,req.method);
    next(); 
});

// submit details ko direct browser me dalre to ye skip hojaega aur neeche wala came from another middleware screen pe print hojaega
app.post('/submit-details',(req,res,next)=>{
    console.log("Came in second middleware",req.url,req.method);
    res.send("<p>Welcome to complete coding nodejs series</p>");
    
});
app.use('/',(req,res,next)=>{
    console.log("Came in another middleware",req.url,req.method)
    res.send("<p>Came from another middle ware</p>")
})



 
const PORT = 3002;
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

// cannot send cannot call next() after res.send()

