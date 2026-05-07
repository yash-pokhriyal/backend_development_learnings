// const http = require('http');
const { error } = require('console');
const fs = require('fs')

// const server = http.createServer((req,res)=>{

const userRequestHandler = (req,res)=>{
   
    console.log(req.url ,req.method);

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
        const body =[];
  
       req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
       })
    
  
       req.on('end',()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);

          
            const params = new URLSearchParams(fullBody);

            const bodyObject = Object.fromEntries(params)
            console.log(bodyObject);
            // very slow and block the way | for urgent kaam 
            // fs.writeFileSync('user-details.txt' , JSON.stringify(bodyObject))

            // by default hi async me write | ab ye kaam livuv ke worker thread krenge
            fs.writeFile('user-details.txt' , JSON.stringify(bodyObject),error=>{
                console.log("Data written successfully")

                res.statusCode=302;
  
                res.setHeader('location','/')
                return res.end();
            });


        })

    }else{
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>I am on way to master web development</h1></body>');
    res.write('</html> ');
    res.end();}
    
}

// const PORT = 3000;
// server.listen(PORT,()=>{
//     console.log(`Server running at http://localhost:${PORT}`)
// })


// Node me hum jo bhi kaam kr rhe hote hain hum mainly saara kaam krte hain event driven programming
// kuch hua ispe respond kijiye


// export module
module.exports = userRequestHandler;
