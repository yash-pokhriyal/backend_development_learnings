const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
   
    console.log(req.url ,req.method,req.headers);

    // Taking input from User 

   
    if(req.url === '/'){
        
        // server side rendering


        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>Coding Challange</title></head>');
        res.write('<body><h1>Welcome to home page</h1>');
        res.write('<h2>Enter Your Details : </h2>')
        res.write('<form action="/submit-details" method="POST">')
        res.write('<input type="text" name ="username" placeholder="Enter your name "><br><br>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" name ="gender" id="male" value="male" >')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" name ="gender" id="female" value="female" >')
        res.write('<br><br><input type="submit" value="Submit">')
        res.write('</form>')


        
        res.write('</body>')    
        res.write('</html> ');
        return res.end();

    } else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
       fs.writeFileSync('user.txt','Yash pokhriyal')
    //    302 means redirection | 200 ok | 404 cannot handle
       res.statusCode=302;
    //    set header
       res.setHeader('location','/')
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