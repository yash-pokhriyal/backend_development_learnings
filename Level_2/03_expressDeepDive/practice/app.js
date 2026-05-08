// Create a new project.
// 1. Install nodemon and express.
// 2. Add two dummy middleware that logs request path and request method respectively.
// 3. Add a third middleware that returns a response.
// 4. Now add handling using two more middleware that handle path /, a request to /contact-us page.
// 5. Contact us should return a form with name and email as input fields that submits to /contact-us page also.
// 6. Also handle POST incoming request to /contact-us path using a separate middleware.

const express = require('express');

const app = express();

// by default path ("/")
app.use((req,res,next)=>{
     console.log("First Dummy Middleware",req.url,req.method);
     next();
})
app.use((req,res,next)=>{
     console.log("Second Dummy Middleware",req.url,req.method);
     next();
})

// app.use((req,res,next)=>{
//      console.log("Third  Middleware",req.url,req.method);
//      res.send('<h1>Welcome guys</h1>')
// })

app.get("/",(req,res,next)=>{
    console.log("Handling / for GET",req.url,req.method);
    res.send(`<h1>Welcome to complete coding</h1>`);
})
app.get("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for GET",req.url,req.method);
    res.send(`<h1>Please give your details here</h1>
        <form action="/contact-us" method="POST">
          <input type="text" name="name" placeholder="Enter your name" />
          <input type="email" name="email" placeholder="Enter your Email" />
          <input type="Submit" />
        </form>
    `);
})

app.post("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for POST",req.url,req.method);
    res.send("<h1>We will contact you shortly</h1>")
})
 
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})