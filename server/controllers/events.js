const knex = require('knex')(require("../knexfile").development);

    exports.getAllEvents = (_req, res) => {
        knex("events")
       
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({
                errorMessage: "Unable to retrieve events from database",
            })
        })
    }