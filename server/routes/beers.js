const knex = require('knex')(require("../knexfile").development);
const express = require("express");
const router = express.Router();
const beersController = require('../controllers/beers');
const commentsController = require('../controllers/comments');
const foodsController = require('../controllers/foods');

port = process.env.port;



let beers = [];

knex("beers")
.then((data) => {
    beers = data;
})
.catch((err) => res.status(400).send("Error retrieving beers"))


router.get('/search/:seachQuery', (req, res) => {
    let filteredBeers = beers.filter(beer => beer.beerType.toLowerCase().includes(req.params.seachQuery))
    res.json(filteredBeers)
})

router.get('/', beersController.getAllBeers);

router.post('/upload', beersController.postBeer);

router.get('/foods', foodsController.getAllFoods);

router.get('/:id', beersController.getOneBeer);

router.post('/:id', commentsController.postComment);

router.get('/:id/comments', commentsController.getAllComments);







module.exports = router;