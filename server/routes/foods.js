// const express = require("express");
const router = express.Router();
const beersController = require('../controllers/foods');
// Middleware
// router.use(express.json());
// Config
// require("dotenv").config();
port = process.env.port;

router.get('/', foodsController.getAll);

router.get('/:foodId', foodsController.getOne);

module.exports = router;