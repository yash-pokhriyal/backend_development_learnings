// core modules
const path = require('path');

const express = require('express');

const hostRouter = express.Router();
// const rootDir = require('../utils/pathUtil');

hostRouter.get("/add-home", (req,res,next)=>{
   
    // res.sendFile(path.join(rootDir,"views","addHome.html"))
     res.render('addHome', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
})
const registeredHomes = [];
hostRouter.post("/add-home", (req,res,next)=>{
    // console.log(req.body);
    // registeredHomes.push({houseName:req.body.houseName});
    // res.sendFile(path.join(rootDir,"views","homeAdded.html"))

    console.log('Home Registration successful for:', req.body);
    registeredHomes.push(req.body);
    res.render('homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
   
})

exports.hostRouter = hostRouter;
exports.registeredHomes=registeredHomes;