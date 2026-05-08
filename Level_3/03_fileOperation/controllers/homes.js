
const Home = require('../models/home')


exports.getAddHome = (req,res,next)=>{
   
    // res.sendFile(path.join(rootDir,"views","addHome.html"))
     res.render('addHome', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
}

exports.postAddHome = (req,res,next)=>{
    console.log('Home Registration successful for:', req.body);
    const {houseName, price, location, rating, photoUrl} = req.body;

    const home = new Home(houseName, price, location, rating, photoUrl);
    home.save();

    res.render('homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
}

exports.getHomes = (req,res,next)=>{
    Home.fetchAll((registeredHomes)=>{
        res.render('home',{registeredHomes: registeredHomes ,pageTitle: 'airbnb Home', currentPage: 'Home'})
    });
    // console.log(registeredHomes);
    
    
}




// exports.registeredHomes=registeredHomes;