const sumRequestHandler = (req,res) =>{
   console.log("1.In sum request Handler",req.url);
   
   const body=[]
   let result;
   req.on ('data',chunk=>{
    body.push(chunk)
    console.log("2. Chunk came");
   });
   req.on('end',()=>{

    console.log("3. End event came");
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
   });

   console.log("4. sending the response")
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
 
}




exports.sumRequestHandler=sumRequestHandler;


// yhan undefined aaya kyunki 
// on wale tareeke me hum event ko listen kr rhe hain jab bhi bhai tere pass data hoga to humko btadena
// ye function tab execute jab data ajaega 
// ab data ni aaya to wo upar wala execute ni hua result aaya ni

// phir pehle html wala show hojaega tabhi sum undefined aara 
// sequence

// 1.In sum request Handler /calculate-result
// 4. sending the response
// 2. Chunk came
// 3. End event came

// yhan jo kaam hai wo kissi kaam ke htm hone pe dependent hai
// jab data ajaega tabh execute krna 
// yhi hai async programming


// agar me req.on data wala badme krdu code me aur req.on end wala pehle tabh bhi same sequence me aega 
// 1.In sum request Handler /calculate-result
// 4. sending the response
// 2. Chunk came
// 3. End event came

// yhi event driven programming