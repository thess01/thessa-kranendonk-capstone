const knex = require('knex')(require("../knexfile").development);

//get all comments per beer_id
exports.getAllComments = (req, res) => { 
    knex("comments")
    .where({beer_id: req.params.id})
    .then(data => {
        if(!data.length) {
            return res.status(404).json({
                message: "Comment does not exist"
            })
        }
        res.json(data);
    })
}

exports.postComment = (req, res) => {
    const beer_id = req.params.id
    knex("comments")
    .insert(req.body)
    .then((data) => {
        // get beer by id
        res.status(201).json(data);
    })
    .catch(() => {
        res.status(400).json({
            message: `Error creating comment`
        })
    })

}