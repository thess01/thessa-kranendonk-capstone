import { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import "./BeerDetails.scss";

const BeerDetails = ({beer, handleEditBeer}) => {
const [breweryInfo, setBreweryInfo] = useState(null);

useEffect(() => {
    getBreweryData();
}, []);


  const getBreweryData = () => {
    let token = sessionStorage.getItem('authToken')
    if (!!token) {
        axios.get('/api/upload', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                const breweryData = response.data;
                setBreweryInfo(breweryData);
            })
            .catch((error) => {
                console.log(error);
              });
    } 
  }
  let history = useHistory();

  const handleDelete = () => {
    axios.delete(`/api/beers/${beer.id}`)
      .then(() => {
          history.push("/");
          })

  }


  if (!breweryInfo || beer.brewery_id !== breweryInfo.brewery_id) {
  return (
    <div className="beer-details">
      <div className="beer-details__background"></div>
      <img className="beer-details__image" src={beer.image} alt={beer.beerName}/>
      <div className="beer-details__brewery-wrap">
        <h4 className="beer-details__beer-name">{beer.beerName.toUpperCase()}</h4>
        <p className="beer-details__brewery-info">by {beer.breweryName}, {beer.cityState}, {beer.country}</p>
      </div>
      <p className="beer-details__beer-type">{beer.beerType.toUpperCase()} - {beer.ABV}</p>


   
        <p className="beer-details__description">{beer.description}</p>
        <div className="beer-details__wrapper">
        
              <p className="beer-details__name">Season:</p>
              <p className="beer-details__info">{beer.season}</p>
              <p className="beer-details__name">Profile:</p>
              <p className="beer-details__info">{beer.flavor}</p>
              <p className="beer-details__name">Expert rating:</p>
              <p className="beer-details__info">{beer.rating} stars</p>
        </div>
    </div>
  )
  } else {
    return (
    <div className="beer-details">
      <div className="beer-details__background"></div>
      <img className="beer-details__image" src={beer.image} alt={beer.beerName}/>
      <div className="beer-details__brewery-wrap">
        <h4 className="beer-details__beer-name">{beer.beerName.toUpperCase()}</h4>
        <p className="beer-details__brewery-info">by {beer.breweryName}, {beer.cityState}, {beer.country}</p>
      </div>
      <p className="beer-details__beer-type">{beer.beerType.toUpperCase()} - {beer.ABV}</p>


   
        <p className="beer-details__description">{beer.description}</p>
        <div className="beer-details__wrapper">
        
              <p className="beer-details__name">Season:</p>
              <p className="beer-details__info">{beer.season}</p>
              <p className="beer-details__name">Profile:</p>
              <p className="beer-details__info">{beer.flavor}</p>
              <p className="beer-details__name">Expert rating:</p>
              <p className="beer-details__info">{beer.rating} stars</p>
        </div>
        <button className="delModal__delete-button" onClick={() => handleEditBeer()}>Edit</button>
        <button className="delModal__delete-button" onClick={handleDelete}>Delete</button>
    </div>
    )
  }
          }


export default BeerDetails;
