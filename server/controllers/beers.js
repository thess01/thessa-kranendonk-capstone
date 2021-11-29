const knex = require('knex')(require("../knexfile").development);

exports.getAllBeers = (_req, res) => {
    knex("beers")
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(500).json({
            errorMessage: "Unable to retrieve beers from database",
            error: err
        })
    })
}

// display one beer by Id and show foods by beerType
exports.getOneBeer = (req, res) => {
    // const beerId = req.params.id;

    knex("beers")
    .where({id: req.params.id})
    // .join('foods', "foods.beerType", "=", "beers.beerType")
    .then(data => {
        if(!data.length) {
            return res.status(404).json({
                message: "Beer does not exist"
            })
        }
        res.json(data);
    })
}


exports.postBeer = (req, res) => {
    knex("beers")
    .insert(req.body)
    .then((data) => {
        res.status(201).json(data);
    })
    .catch(() => {
        res.status(400).json({
            message: `Error creating ${req.body.beerName}`
        })
    })

}