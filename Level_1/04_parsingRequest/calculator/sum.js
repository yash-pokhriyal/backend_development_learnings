const sumRequestHandler = (req,res) =>{
   console.log("In sum request Handler",req.url);
   
   const body=[]
   req.on ('data',chunk=>body.push(chunk));
   req.on('end',()=>{
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    
    // will be discussed later
    res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Practice question</title><head>
            <body>
            <h1>Your Sum is ${result}</h1>
            <a href='/'>Go To Home</a> 
            </body>
            </html>
            
        `);
    return res.end();
   });
 
}




exports.sumRequestHandler=sumRequestHandler;