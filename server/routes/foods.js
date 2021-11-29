const express = require("express");
const router = express.Router();
const foodsController = require('../controllers/foods');
// Middleware
// router.use(express.json());
// Config
// require("dotenv").config();
port = process.env.port;

router.get('/', foodsController.getAll);

router.get('/:id', foodsController.getOne);

module.exports = router;