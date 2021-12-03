const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authorize = require("../middleware/authorize");
const knex = require('knex')(require("../knexfile").development);
const breweriesController = require('../controllers/breweries')


router.get('/breweries', breweriesController.getOneBrewery);

router.get('/upload', authorize, (req, res) => {
    const breweryNameFromToken = req.decoded.breweryName;
    const foundBrewery = breweries.find(brewery => brewery.breweryName === breweryNameFromToken);

    if (!foundBrewery) {
        return res.status(400).json({
            message: "Unable to find brewery"
        })
    }
    return res.json({
        breweryName: foundBrewery.breweryName,
        brewery_id: foundBrewery.id
    })
})

let breweries = [];

knex('breweries')
    // .where({ "breweryName": breweryName})
    .then((data) => {
        console.log(data)
      breweries = data;
    })


router.post('/login', (req, res) => {
    const { breweryName, password } = req.body;

    if (!breweryName || !password) {
        return res.status(400).json({
            message: "Login requires brewery name and password"
        })
    }
        
    const foundBrewery = breweries.find(brewery => brewery.breweryName === breweryName)

        if (!foundBrewery) {
            return res.status(404).json({
                message: "Brewery does not exist"
            })
        }

        if (foundBrewery.password !== password) {
            return res.status(400).json({
                message: "Password does not match"
            })
        }

    const token = jwt.sign(
        { breweryName: breweryName },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Succesfully logged in",
        token: token
    });
});

router.post('/signup', (req, res) => {
    const breweryName = req.body.breweryName;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const cityState = req.body.cityState;
    const country = req.body.country;
    const phone = req.body.phone;

    if (!breweryName || !email || !password || !address || !cityState || !phone || !country) {
        return res.status(400).json({
            message: "Sign up requires all fields to be populated"
        })
    }

    const newBrewery = {
        breweryName: breweryName,
        email: email,
        password: password,
        address: address,
        cityState: cityState,
        country: country,
        phone: phone
    }

    knex('breweries')
        .insert({
            breweryName: newBrewery.breweryName,
            email: newBrewery.email,
            password: newBrewery.password,
            address: newBrewery.address,
            cityState: newBrewery.cityState,
            phone: newBrewery.phone,
            country: newBrewery.country
        })
        .then((_result) => {
            knex('breweries')
                .then((data) => {
                    res.status(201).json(data);
                })
        })
        .catch(() => {
            res.status(400).json({
                message: `Error creating ${req.body.breweryName}`
            })
        })
})

module.exports = router;