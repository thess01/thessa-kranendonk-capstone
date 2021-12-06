const knex = require('knex')(require("../knexfile").development);


exports.postComment = (req, res) => {
    knex("comments")
    .insert(req.body)
    .then((data) => {
        res.status(201).json(data);
    })
    .catch(() => {
        res.status(400).json({
            message: `Error creating comment`
        })
    })

}

exports.deleteComment = (req, res) => {
    knex("comments")
    .where({"comments.id": req.params.id})
    .del()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch(() => {
        res.status(400).json({
            message: `Error deleting comment`
        })
    })

}