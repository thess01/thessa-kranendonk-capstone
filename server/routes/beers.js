const express = require("express");
const router = express.Router();
const beersController = require('../controllers/beers');
const commentsController = require('../controllers/comments');
// Middleware
// router.use(express.json());
// Config
// require("dotenv").config();
port = process.env.port;

router.get('/', beersController.getAllBeers);

router.get('/:id', beersController.getOneBeer);

router.post('/', beersController.postBeer);

router.get('/:id/comments', commentsController.getAllComments);



module.exports = router;