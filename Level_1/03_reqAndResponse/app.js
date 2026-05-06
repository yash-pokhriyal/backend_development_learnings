const http = require('http');

const server = http.createServer((req,res)=>{
    // understand request object
    console.log(req.url ,req.method,req.headers);

    // sending response 

    // res.setHeader('Content-Type','json')

    // routing requests
    if(req.url === '/'){

        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>Coding Challange</title></head>');
        res.write('<body><h1>Welcome to home page</h1></body>');
        
        res.write('</html> ');
        return res.end();

    }else if(req.url === '/products'){

        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>Our Products</title></head>');
        res.write('<body><h1>Mern Stack</h1></body>');
        res.write('</html> ');
        return res.end();

    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>I am on way to master web development</h1></body>');
    res.write('</html> ');
    res.end();
    
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

// get data lene aaya 
// post dene aaya hu