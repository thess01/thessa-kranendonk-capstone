import "./BeerDetails.scss";
import image from "../../assets/images/beer_1.jpg";

const BeerDetails = ({beer}) => {
  console.log({beer});
  return (
    <div className="beer-details">
      <div className="beer-details__background"></div>
     <img className="beer-details__image" src={image} alt={beer.beerName}/>
      <div className="beer-details__brewery-wrap">
        <h4 className="beer-details__beer-name">{beer.beerName}</h4>
        <p className="beer-details__brewery-info">by {beer.breweryName}, {beer.cityState}, {beer.country}</p>
      </div>
      <p className="beer-details__beer-type">{beer.beerType}</p>


      <div className="beer-details__desktop-wrapper">
        <p className="beer-details__description">{beer.description}</p>
        <div className="beer-details__wrapper">
            <div className="beer-details__name-wrapper">
              <p className="beer-details__name">Category</p>
              <p className="beer-details__name">Season</p>
              <p className="beer-details__name">Flavor</p>
              <p className="beer-details__name">ABV</p>
              <p className="beer-details__name">Rating</p>
            </div>
            <div className="beer-details__info-wrapper">
            <p className="beer-details__info">{beer.beerType}</p>
            <p className="beer-details__info">{beer.season}</p>
            <p className="beer-details__info">{beer.flavor}</p>
            <p className="beer-details__info">{beer.ABV}</p>
            <p className="beer-details__info">{beer.rating} stars</p>
            </div>
        </div>
      </div>
  
    </div>
  );
};

export default BeerDetails;
