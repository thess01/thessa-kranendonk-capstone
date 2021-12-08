import { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import Box from "@mui/material/Box";
import React from "react";
import Modal from "@mui/material/Modal";
import { useForm} from 'react-hook-form'
import "./BeerDetails.scss";

const BeerDetails = ({beer, handleEditBeer}) => {
const [breweryInfo, setBreweryInfo] = useState(null);
const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
        <button className="delModal__delete-button" onClick={handleOpen}>Edit</button>
        <button className="delModal__delete-button" onClick={handleDelete}>Delete</button>
    
    <div className="edit-beer">
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="edit-beer__modal-box">
      <h2 className="edit-beer__modal-header">Enter Beer Details</h2>
              <form
                className="edit-beer__form"
                onSubmit={handleSubmit(handleEditBeer)}
              >
                <label className="edit-beer__label" htmlFor="beerName">
                  Beer Name
                </label>
                <input
                  className="edit-beer__input"
                  type="text"
                  name="beerName"
                  placeholder="Beer Name"
                  {...register("beerName", {
                    required: true,
                    max: 50,
                    min: -3,
                    maxLength: 80,
                  })}
                />
                {errors.beerName && (
                  <p className="edit-beer__error">This field is required</p>
                )}

                <label className="edit-beer__label" htmlFor="description">
                  Description
                </label>
                <input
                  className="edit-beer__input"
                  type="text"
                  name="description"
                  placeholder="Description"
                  {...register("description", {
                    valiABV: (value) => value.length > 50,
                  })}
                />
                {errors.description && (
                  <p className="edit-beer__error">
                    Your description is less than 50 characters
                  </p>
                )}

                <select {...register("Title", { required: true })}>
                  <option value="IPA">IPA</option>
                  <option value="Amber Ale">Amber Ale</option>
                  <option value="Porter">Porter</option>
                  <option value="Stout">Stout</option>
                  <option value="Lager">Lager</option>
                  <option value="Sour">Sour</option>
                  <option value="Other">Other</option>
                </select>

                <label className="edit-beer__label" htmlFor="season">
                  Season
                </label>
                <input
                  className="edit-beer__input"
                  type="text"
                  name="season"
                  placeholder="Season"
                  {...register("season", {
                    required: true,
                    max: 50,
                    min: -3,
                    maxLength: 80,
                  })}
                />
                {errors.season && (
                  <p className="edit-beer__error">This field is required</p>
                )}

                <label className="edit-beer__label" htmlFor="ABV">
                  ABV
                </label>
                <input
                  className="edit-beer__input"
                  type="text"
                  name="ABV"
                  placeholder="ABV"
                  {...register("ABV", { required: true, maxLength: 100 })}
                />
                {errors.ABV && (
                  <p className="edit-beer__error">This field is required</p>
                )}

                <label className="edit-beer__label" htmlFor="flavor">
                  flavor
                </label>
                <input
                  className="edit-beer__input"
                  type="flavor"
                  name="flavor"
                  placeholder="Flavour"
                  {...register("flavor", { required: true, maxLength: 100 })}
                />
                {errors.flavor && (
                  <p className="edit-beer__error">
                    flavor did not pass the requirements
                  </p>
                )}

                <div className="edit-beer__button-wrapper">
                  <button onClick={handleClose} className="edit-beer__cancel">
                    Cancel
                  </button>
                  <input className="edit-beer__submit" type="submit" />
                </div>
              </form>

      </Box>
    </Modal>
  </div>
  </div>
    )
  }
          }


export default BeerDetails;
