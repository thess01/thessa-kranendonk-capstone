const express = require("express");
const app = express();
const cors = require("cors");
const knex = require('knex')(require('./knexfile').development);
require("dotenv").config();
const port = process.env.PORT || 8080;
const beersRoutes = require("./routes/beers");
const breweriesRoutes = require("./routes/breweries")
const eventsRoutes = require("./routes/events");

app.use(cors());
app.use(express.json());


app.use("/api/beers", beersRoutes);
app.use("/api", breweriesRoutes)
app.use("/api", eventsRoutes);

app.get('/', (_req, res) => {
   console.log('Hello World')
 });


app.listen(port, () => {
   console.log(`Grooving on: ${port}`);
});
