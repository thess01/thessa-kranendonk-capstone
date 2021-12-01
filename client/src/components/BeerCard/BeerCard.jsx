import "./BeerCard.scss";
import { Link } from "react-router-dom";
import image from "../../assets/images/beer_1.jpg";

export default function BeerCard({ beers }) {
  return (
    <>
      <ul className="beercard">
        {beers.map((beer) => {
          return (
            <Link className="beercard__link" to={`/beers/` + beer.id} key={beer.id}>
              <li className="beerCard__item">
                <div className="beercard__wrapper">
                  <img
                    src={image}
                    alt="logo"
                    className="beercard__img"
                  />
                  <div className="beercard__text-wrapper">
                    <h4 className="beercard__title">{beer.beerName}</h4>
                    <p className="beercard__brewery-name">{beer.breweryName}</p>
                    <p className="beercard__brewery-location">{beer.cityState}, {beer.country}</p>
                    <p className="beercard__brewery-type">{beer.beerType}</p>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
