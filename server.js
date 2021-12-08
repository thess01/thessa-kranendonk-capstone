const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 8080;
const beersRoutes = require("./server/routes/beers");
const breweriesRoutes = require("./server/routes/breweries")
const eventsRoutes = require("./server/routes/events");

app.use(cors());
app.use(express.json());


app.use("/api/beers", beersRoutes);
app.use("/api", breweriesRoutes)
app.use("/api", eventsRoutes);

app.get('/', (_req, res) => {
   console.log('Hello World')
 });


 if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '../client/build')));
 }

 if (process.env.NODE_ENV === 'production') {
   app.get('*', (request, response) => {
     response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
   });
 }

app.listen(process.env.PORT || 8080, () => {
   console.log(`Server is running on port: ${port}`);
});