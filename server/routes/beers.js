const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const beersRoutes = express.Router;
const dbo = require("../db/conn");
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
// Middleware
router.use(express.json());
// Config
require("dotenv").config();
port = process.env.port;

beersRoutes.route("/").get((req, res) => {
  let db_connect = dbo.getDb("BrewsAndBites");
  db_connect
    .collection("beers")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching beers!");
     } else {
      res.json(result);
     }
    });
});

// module.exports = beersRoutes;