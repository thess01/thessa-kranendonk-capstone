const { default: knex } = require("knex")

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

exports.getOneBrewery = (req, res) => {
    knex("breweries")
   
    .where({"brewery_id": brewery_id})
    .then(brewery => {
        if(!brewery.length) {
            return res.status(404).json({
                message: "Brewery does not exist"
            })
        }
        res.json(brewery)
    })
}