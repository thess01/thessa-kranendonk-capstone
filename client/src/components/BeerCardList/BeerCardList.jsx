import BeerCard from '../BeerCard/BeerCard';
import './BeerCardList.scss'

export default function BeerCardList( { beers } ) {
    return (
        <>
        <section className="beercard-list">
            {
                beers.map(beer=> 
                <BeerCard
                    id={beer.id}
                    beerName={beer.beerName}
                    beerType={beer.beerType}
                    breweryName={beer.breweryName}
                    country={beer.country}
                    cityState={beer.cityState}
                    image={beer.image}
                />)
            }
            </section>
        </>
    )
}