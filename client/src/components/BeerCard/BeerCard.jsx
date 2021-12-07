import "./BeerCard.scss";
import { Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';

export default function BeerCard({ id, beerName, image, beerType, breweryName, cityState, country }) {
  return (
    <>
    <Slide left>
      <ul className="beercard">
            <Link className="beercard__link" to={`/beers/` + id}>
              <li className="beerCard__item"  key={id}>
                <div className="beercard__wrapper">
                  <img
                    src={image}
                    alt="logo"
                    className="beercard__img"
                  />
                  <div className="beercard__text-wrapper">
                    <h4 className="beercard__title">{beerName}</h4>
                    <p className="beercard__brewery-name">{breweryName}</p>
                    <p className="beercard__brewery-location">{cityState}, {country}</p>
                    <p className="beercard__brewery-type">{beerType}</p>
                  </div>
                </div>
              </li>
            </Link>
      </ul>
      </Slide>
    </>
  );
}
