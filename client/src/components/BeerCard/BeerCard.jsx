import "./BeerCard.scss";
import { Link } from "react-router-dom";

export default function BeerCard({ beers }) {
  return (
    <>
      <ul className="beercard">
        {beers.map((beer) => {
          return (
            <Link to={`/beers/` + beer.id} key={beer.id}>
              <li>
                <div className="beercard-wrapper">
                  <img
                    src={beer.image}
                    alt="logo"
                    className="beercard__img"
                  />
                  <div className="beercard__text-wrapper">
                    <h4 className="beercard__title">{beer.beerName}</h4>
                    <p className="beercard__brewery-name">{beer.breweryName}</p>
                    <p className="beercard__brewery-location">Hello</p>
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
