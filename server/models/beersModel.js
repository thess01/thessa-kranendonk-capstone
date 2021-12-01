// const knex = require('knex')(require("../knexfile").development);

// let Beer = function(beer) {
//     this.beerName = beer.beerName;
//     this.beerType = beer.beerType;
//     this.season = beer.season;
//     this.ABV = beer.ABV;
//     this.breweryName = beer.breweryName;
//     this.flavor = beer.flavor;
// }

// Beer.getAllBeers = (req, res) => {
//     knex("beers")
//     .then((data)=> {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// Beer.getBeerByType = () {
//     knex("beers")
//     .whereRaw('beerType = ?', [query])
// }