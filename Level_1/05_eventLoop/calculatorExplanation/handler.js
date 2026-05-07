
const {sumRequestHandler} = require('./sum')

const requestHandler = (req,res)=>{
  console.log(req.url,req.method);
   if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Practice Question</title><head>
            <body>
            <h1>Welcome to Calculator</h1>
            <a href='/calculator'>Go To Calculator</a> 
            </body>
            </html>
            
        `);
        return res.end();
    }else if(req.url.toLowerCase() === '/calculator'){

        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Practice Question</title><head>
            <body>
            <h1>Here is the calculator</h1>
            <form action="/calculate-result" method="POST">
            <input type='text' placeholder="First Number" name= "first"><br><br>
            <input type='text' placeholder="Second Number" name= "second"><br><br>
            <input type='submit' value='Submit'>
            </form>
            </body>
            </html>
            
        `);
        return res.end();

    }else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
        return sumRequestHandler(req,res);
        
    }

     res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Practice question</title><head>
            <body>
            <h1>404 page doesnot exist</h1>
            <a href='/'>Go To Home</a> 
            </body>
            </html>
            
        `);
        return res.end();
}

exports.requestHandler = requestHandler;
// yhan humne object manke import kia