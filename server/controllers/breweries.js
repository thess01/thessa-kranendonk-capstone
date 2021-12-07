const knex = require('knex')(require("../knexfile").development);
const jwt = require("jsonwebtoken");

exports.postBrewery = (req, res) => {
    knex("breweries")
    .insert(req.body)
    .then((data) => {
        res.status(201).json(data);
    })
    .catch(() => {
        res.status(400).json({
            message: `Error creating ${req.body.breweryName}`
        })
    })
}

let breweries = [];
knex('breweries')
.select("*")
    .then((data) => {
      breweries = data;
    })

exports.uploadBrewery = (req, res) => {

    const breweryNameFromToken = req.decoded.breweryName;
    const foundBrewery = breweries.find(brewery => brewery.breweryName === breweryNameFromToken);

    if (!foundBrewery) {
        return res.status(400).json({
            message: "Unable to find brewery"
        })
    }
    return res.json({
        breweryName: foundBrewery.breweryName,
        brewery_id: foundBrewery.brewery_id
    })
}


exports.loginBrewery = (req, res) => {
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
}


exports.signupBrewery = (req, res) => {
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
}