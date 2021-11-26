// const express = require("express");
const router = express.Router();
const beersController = require('../controllers/beers');
// Middleware
// router.use(express.json());
// Config
// require("dotenv").config();
port = process.env.port;

router.get('/', beersController.getAll);

router.get('/:beerId', beersController.getOne);

// router.get('/:beerId', beersController.getOne);

module.exports = router;