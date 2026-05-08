// core modules
const path = require('path');
const express = require('express');

// create a router
const userRouter = express.Router()

const { registeredHomes } = require('./hostRouter');

userRouter.get("/", (req,res,next)=>{
    console.log(registeredHomes);
    // direct pass ejs
    // res.render('home',{registeredHomes})
    // same
    res.render('home',{registeredHomes: registeredHomes ,pageTitle: 'airbnb Home', currentPage: 'Home'})
})

module.exports = userRouter;
