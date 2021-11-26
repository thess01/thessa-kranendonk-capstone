const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8080;
const beersRoutes = require("./routes/beers");
const foodsRoutes = require("./routes/foods");
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// mongoDB connection
const dbo = require("./db/conn");

app.use("/api/beers", beersRoutes);
app.use("/api/foods", foodsRoutes);

app.get("/api/beers/:beerId", (req, res) => {
  res.json(beerId);
});

app.get("/api/foods/:foodId", (req, res) => {
  res.json(foodId);
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });

  console.log(`Server is running on port: ${port}`);
});
