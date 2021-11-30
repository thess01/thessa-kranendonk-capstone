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
   
    .where({"beers.id": req.params.id})
    .join('breweries', 'beers.brewery_id', 'breweries.id')
    .then(data => {
        if(!data.length) {
            return res.status(404).json({
                message: "Beer does not exist"
            })
        }
        knex("foods")
        .where({"beerType": data[0].beerType})
        .then(newData => {
            console.log(newData)
            data[0].foods = newData
            console.log(data[0]);
            res.json(data[0]);
        })
        // return data;
        
    })



    // .then(data => {
    //     console.log(data)
    //     knex("foods")
    //     .where({beerType: data.beerType})
    //     .then(food => {
    //         if(!food.length) {
    //             return res.status(404).json({
    //                 message: "Food does not exist"
    //             })
    //         }
    //         const dish = food;
    //         data.push(food);
    //     })
    // })
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