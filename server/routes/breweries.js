const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");
const breweriesController = require('../controllers/breweries')



router.get('/upload', authorize, breweriesController.uploadBrewery)

router.post('/login', breweriesController.loginBrewery)

router.post('/signup', breweriesController.signupBrewery)


module.exports = router;