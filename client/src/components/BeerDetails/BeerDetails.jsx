import "./BeerDetails.scss";

const BeerDetails = ({beer, brewery}) => {
  console.log({beer});
  return (
    <div className="beer-details">
     <img className="beer-details__image" src={beer[0].image} alt={beer[0].beerName}/>
      <h4 className="beer-details__beer-name">{beer[0].beerName}</h4>
      <p className="beer-details__brewery-info">by {beer[0].breweryName}, {beer[0].cityState}, {beer[0].country}</p>
      <p className="beer-details__beer-type">{beer[0].beerType}</p>

      <div className="beer-details__wrapper">
          <div className="beer-details__description-wrap">
              <p className="beer-details__description">{beer[0].description}</p>
          </div>
          <div className="beer-details__details-wrap">
            <p className="beer-details__category">Category{beer[0].beerType}</p>
            <p className="beer-details__season">Season{beer[0].season}</p>
            <p className="beer-details__flavor">Flavor{beer[0].flavor}</p>
            <p className="beer-details__abv">ABV{beer[0].ABV}</p>
            <p className="beer-details__rating">Rating{beer[0].rating}</p>

          </div>

      </div>
  
    </div>
  );
};

export default BeerDetails;
