const knex = process.env.NODE_ENV === 'production' 
? require('knex')(require("../knexfile").production)
: require('knex')(require("../knexfile").development);

exports.getAllBeers = (_req, res) => {
    knex("beers")
    .join('breweries','beers.brewery_id','breweries.brewery_id')
    .then((beers) => {
        res.json(beers);
    })
    .catch((err) => {
        res.status(500).json({
            errorMessage: "Unable to retrieve beers from database",
            error: err
        })
    })
}

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
     
        })
        if(beer){
            knex("comments")
            .where({"beer_id": beer[0].id})
            .then(comments => {
                beer[0].comments = comments
                res.json(beer[0]);
            })
        }
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


exports.searchBeers = (req, res) => {
    // let query = req.params.seachQuery;
    knex("beers")
    .join('breweries','beers.brewery_id','breweries.brewery_id')
    .where("beerName", "like", `%${req.params.searchQuery}%`).orWhere("beerType", "like", `%${req.params.searchQuery}%`).orWhere("flavor", "like", `%${req.params.searchQuery}%`)
    .then((data) => {
        res.json(data)
})
.catch((err) => {
    res.status(400).json({
    err: "Error retrieving beers"})

})
}
