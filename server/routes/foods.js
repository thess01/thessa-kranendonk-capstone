const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
// Middleware
router.use(express.json());
// Config
require("dotenv").config();
port = process.env.port;

router.route("/").get((req, res) => {
  let beers = fs.readFileSync("./data/warehouses.json");
  beers = JSON.parse(beers);
  return res.json(beers);
});
