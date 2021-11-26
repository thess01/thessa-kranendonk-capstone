const knex = require('knex')(require("../knexfile").development);


exports.getOne = (req, res) => {
    const breweryId = req.params.id;

    knex("breweries")
    .where({id: breweryId})
    .then(data => {
        if(!data.length) {
            return res.status(404).json({
                message: "Brewery does not exist"
            })
        }
        res.json(data[0]);
    })
}