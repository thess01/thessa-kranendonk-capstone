const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const knex = require('knex')(require('./knexfile').development);
require("dotenv").config();
const port = process.env.PORT || 8080;
const beersRoutes = require("./routes/beers");
const breweriesRoutes = require("./routes/breweries")
// const foodsRoutes = require("./routes/foods");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
// app.use(require("./routes/beers"));

app.use("/api/beers", beersRoutes);
app.use("/api", breweriesRoutes)
// app.use("/api/foods", foodsRoutes);

app.get('/', (_req, res) => {
   console.log('Hello')
 });


app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});
