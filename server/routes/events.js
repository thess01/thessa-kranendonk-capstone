const knex = require('knex')(require("../knexfile").development);
const express = require("express");
const router = express.Router();
const eventsController = require('../controllers/events');


port = process.env.port;



router.get('/events', eventsController.getAllEvents);

router.post('/events/add', eventsController.postEvent)
module.exports = router;