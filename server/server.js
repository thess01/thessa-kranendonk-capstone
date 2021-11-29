const express = require("express");
const app = express();
const cors = require("cors");
const knex = require('knex')(require('./knexfile').development);
// require("dotenv").config();
const port = process.env.PORT || 8080;
const beersRoutes = require("./routes/beers");
const foodsRoutes = require("./routes/foods");

app.use(cors());
app.use(express.json());
app.use(require("./routes/beers"));

app.use("/api/beers", beersRoutes);
app.use("/api/foods", foodsRoutes);

app.get('/', (_req, res) => {
   console.log('Hello')
 });


app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});
