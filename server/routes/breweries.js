const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authorize = require("../middleware/authorize");
const breweriesController = require('../controllers/breweries');
const { default: knex } = require("knex");


router.get('/current', authorize, (req,res) => {
    const breweryNameFromToken = req.decoded.breweryName;
    const foundBrewery = breweries.find(brewery => brewery.breweryName === breweryNameFromToken);

    if(!foundBrewery) {
        return res.status(400).json({
            message: "Unable to find brewery"
        })
    }
    return res.json({
        breweryName: foundBrewery.breweryName
    })
})

router.post('/login', (req, res) => {
    const {breweryName, password} = req.body;

    if (!breweryName || !password) {
        return res.status(400).json({
            message: "Login requires brewery name and password"
        })
    }
    const foundBrewery = breweries.find(brewery => brewery.breweryName === breweryName);

    if (!foundBrewery) {
        return res.status(400).json({
            message: "Brewery does not exist"
        })
    }
    if (foundBrewery.password !== password) {
        return res.status(400).json({
            message: "Password does not match"
        })
    }
    const token = jwt.sign(
        {breweryName: breweryName},
        process.env.JWT_SECRET_KEY,
        {expiresIn: "1h"}
    );

    res.json({
        message: "Succesfully logged in",
        token: token
    });
});

router.post('/register', (req,res) => {
    const breweryName = req.body.breweryName;
    const email = req.body.email;
    const password = req.body.password;

    if(!breweryName || !email || !password) {
        return res.status(400).json({
            message: "Register requires brewery name, email and password"
        })
    }

   knex('breweries')
   .insert(req.body)
   .then((data) => {
    res.status(201).json(data);
   })
   .catch(() => {
    res.status(400).json({
        message: `Error creating ${req.body.breweryName}`
    })
})

    res.sendStatus(200);
})

module.exports = router;