const express = require("express");
const router = express.Router();
// const foodsController = require('../controllers/foods');
// Middleware
// router.use(express.json());
// Config
// require("dotenv").config();
port = process.env.port;

// router.get('/', foodsController.getAllFoods);

// router.get('/:id', foodsController.getOneFood);

module.exports = router;