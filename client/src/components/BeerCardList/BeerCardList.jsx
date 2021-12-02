import BeerCard from '../BeerCard/BeerCard';
import './BeerCardList.scss'

export default function BeerCardList( { beers } ) {
    return (
        <>
        <section className="beercard-list">
            {
                beers.map(beer=> 
                <BeerCard
                    key={beer.id} 
                    id={beer.id}
                    beerName={beer.beerName}
                    beerType={beer.beerType}
                    breweryName={beer.breweryName}
                    country={beer.country}
                    cityState={beer.cityState}
                />)
            }
            </section>
        </>
    )
}