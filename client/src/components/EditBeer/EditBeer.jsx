import './EditBeer.scss';
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Box from "@mui/material/Box";
import React from "react";
import Modal from "@mui/material/Modal";


export default function EditBeer({breweryInfo}) {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let history = useHistory();

  const onSubmit = (data) => {
    axios
      .put(`/api/beers/${breweryInfo.id}`, data)
      .then(() => {
        alert("Upload Succesful!");
        handleClose();
      }, [reset])
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="edit-beer">
        <div className="edit-beer__container">
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
                onSubmit={handleSubmit(onSubmit)}
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
                  {...register("flavor", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
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
      </section>
    </>
  );
}
