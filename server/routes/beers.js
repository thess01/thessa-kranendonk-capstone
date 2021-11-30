const express = require("express");
const router = express.Router();
const beersController = require('../controllers/beers');
const commentsController = require('../controllers/comments');
const foodsController = require('../controllers/foods');
// Middleware
// router.use(express.json());
// Config
// require("dotenv").config();
port = process.env.port;

router.get('/', beersController.getAllBeers);
router.post('/', beersController.postBeer);

router.get('/foods', foodsController.getAllFoods);

router.get('/:id', beersController.getOneBeer);
router.post('/:id', commentsController.postComment);

router.get('/:id/comments', commentsController.getAllComments);







module.exports = router;