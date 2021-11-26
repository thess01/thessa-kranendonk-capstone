const knex = require('knex')(require("../knexfile").development);

exports.getAll = (_req, res) => {
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

exports.getOne = (req, res) => {
    const beerId = req.params.id;

    knex("beers")
    .where({id: beerId})
    .then(data => {
        if(!data.length) {
            return res.status(404).json({
                message: "Beer does not exist"
            })
        }
        res.json(data[0]);
    })
}