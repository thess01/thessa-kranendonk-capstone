const knex = require('knex')(require("../knexfile").development);
const express = require("express");
const router = express.Router();
const beersController = require('../controllers/beers');
const commentsController = require('../controllers/comments');
const foodsController = require('../controllers/foods');

port = process.env.port;


router.get('/', beersController.getAllBeers);

router.post('/upload', beersController.postBeer);

router.get('/search/:searchQuery', beersController.searchBeers);

router.get('/foods', foodsController.getAllFoods);

router.get('/:id', beersController.getOneBeer);

router.delete('/:id', beersController.deleteBeer);

router.put('/:id', beersController.editBeer);

router.post('/:id', commentsController.postComment);

router.delete('/:id/comments/:id', commentsController.deleteComment)


module.exports = router;