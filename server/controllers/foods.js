const knex = require('knex')(require("../knexfile").development);


exports.getOne = (req, res) => {
    const foodId = req.params.id;

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