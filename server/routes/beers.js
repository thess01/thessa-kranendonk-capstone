const knex = require('knex')(require("../knexfile").development);
const express = require("express");
const router = express.Router();
const beersController = require('../controllers/beers');
const commentsController = require('../controllers/comments');
const foodsController = require('../controllers/foods');

port = process.env.port;




router.get('/search/:seachQuery', (req, res) => {
 let query = req.params.seachQuery;
    knex("beers")
    .join('breweries','beers.brewery_id','breweries.brewery_id')
    .where("beerName", "like", `%${query}%`).orWhere("beerType", "like", `%${query}%`).orWhere("flavor", "like", `%${query}%`)
    .then((data) => {
        res.json(data)
})
.catch((err) => res.status(400).send("Error retrieving beers"))

})


router.get('/', beersController.getAllBeers);

router.post('/upload', beersController.postBeer);

router.get('/foods', foodsController.getAllFoods);

router.get('/:id', beersController.getOneBeer);

router.post('/:id', commentsController.postComment);

router.delete('/:id/comments/:id', commentsController.deleteComment)








module.exports = router;