
const express = require('express');

const hostRouter = express.Router();


// const {getAddHome} = require("../controllers/homes")
const homesController = require("../controllers/homes")

hostRouter.get("/add-home",homesController.getAddHome);


hostRouter.post("/add-home", homesController.postAddHome)

exports.hostRouter = hostRouter;
