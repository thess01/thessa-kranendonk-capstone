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