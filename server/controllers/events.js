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


exports.postEvent = (req, res) => {
    knex("events")
    .insert(req.body)
    .then((data) => {
        res.status(201).json(data);
    })
    .catch(() => {
        res.status(400).json({
            message: `Error creating ${req.body.eventName}`
        })
    })
}