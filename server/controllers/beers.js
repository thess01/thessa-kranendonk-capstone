const knex = require('knex')(require("../knexfile").development);

exports.getAllBeers = (_req, res) => {
    knex("beers")
    .join('breweries','beers.brewery_id','breweries.brewery_id')
    .then((beers) => {
        console.log(beers)
        res.json(beers);
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
    knex("beers")
   
    .where({"beers.id": req.params.id})
    .join('breweries','beers.brewery_id','breweries.brewery_id')
    .then(beer => {
        if(!beer.length) {
            return res.status(404).json({
                message: "Beer does not exist"
            })
        }
        if (beer){
        knex("foods")
        .where({"beerType": beer[0].beerType})
        .then(food => {
            beer[0].dishes = food
            console.log(beer[0]);
            res.json(beer[0]);
        })
    }
    })
    .catch((err) => {
        res.status(500).json({
            errorMessage: "Unable to retrieve beer from database",
            error: err
        })
    })
}


exports.postBeer = (req, res) => {
    knex("beers")
    .join('breweries','beers.brewery_id','breweries.brewery_id')
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