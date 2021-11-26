const knex = require('knex')(require("../knexfile").development);


exports.getOne = (req, res) => {
    const foodId = req.params.id;


    exports.getAll = (_req, res) => {
        knex("foods")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({
                errorMessage: "Unable to retrieve dishes from database",
                error: err
            })
        })
    }

    
    knex("foods")
    .where({id: foodId})
    .then(data => {
        if(!data.length) {
            return res.status(404).json({
                message: "Dish does not exist"
            })
        }
        res.json(data[0]);
    })
}