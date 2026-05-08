// core modules
const path = require('path');

const express = require('express');


const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil')


const app = express();



app.use("/", (req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(express.urlencoded())


app.use(userRouter);

// app.use("/host",hostRouter);
// agar routes se host htadu to  tabh bhi ye concat krte dega route /host/add-home .
// app.use(hostRouter);
app.use("/host",hostRouter);

// Serving static files (middle ware to make css file accessible)
app.use(express.static( path.join(rootDir,'public')))

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404page.html"));
})

const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})