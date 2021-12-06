import EventCard from "../EventCard/EventCard";
import { Link, useHistory } from "react-router-dom";
import { useForm} from 'react-hook-form'
import axios from "axios";
import Box from "@mui/material/Box";
import React from "react";
import Modal from "@mui/material/Modal";
import "./EventList.scss";

export default function EventList({ events }) {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  console.log(errors);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let history = useHistory();

  const onSubmit = (data) => {
      axios
        .post(`/api/events/add`, data)
        .then(() => {
          alert("Upload Succesful!");
          handleClose()
  
      }, [reset])
        .catch(err => {console.log(err)});

    
}


  return (
    <>
      <section className="event-card-list">
        <h1 className="event-card-list__header">Events</h1>
        <button onClick={handleOpen} className="event-card-list__add-button">
          Add your event
        </button>
        {events.map((event) => (
          <EventCard
            id={event.id}
            eventName={event.eventName}
            date={event.date}
            location={event.location}
            description={event.description}
            email={event.email}
            image={event.map_image}
          />
        ))}

        <div className="add-event">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="add-event__modal-box">
              <h2 className="add-event__modal-header">Enter Event Details</h2>
              <form className="add-event__form" onSubmit={handleSubmit(onSubmit)}>
                    <label className="add-event__label" htmlFor="eventName">Event Name</label>
                    <input className="add-event__input" type="text" name="eventName" placeholder="Event Name" {...register("eventName", {required: true, max: 50, min: -3, maxLength: 80})} />
                    {errors.eventName && <p className="add-event__error">This field is required</p>}

                    <label className="add-event__label" htmlFor="location">Event Location</label>
                    <input className="add-event__input" type="text" name="location"  placeholder="Location" {...register("location", {required: true, max: 50, min: -3, maxLength: 80})} />
                    {errors.eventLocation && <p className="add-event__error">This field is required</p>}

                    <label className="add-event__label" htmlFor="date">Date</label>
                    <input className="add-event__input" type="text" name="date" placeholder="Date" {...register("date", {required: true, maxLength: 100})} />
                    {errors.date && <p className="add-event__error">This field is required</p>}

                    <label className="add-event__label" htmlFor="email">Email</label>
                    <input className="add-event__input" type="email" name="email" placeholder="Email" {...register("email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} />
                    {errors.email && <p className="add-event__error">Email did not pass the requirements</p>}

                    <label className="add-event__label" htmlFor="website">Website</label>
                    <input className="add-event__input" type="text" name="website" placeholder="Website" {...register("website", {required: true, maxLength: 100})} />
                    
                    <label className="add-event__label" htmlFor="description">Description</label>
                    <input className="add-event__input" type="text" name="description" placeholder="Description" {...register("description", {validate: (value) => value.length > 50})} />
                    {errors.description && <p className="add-event__error">Your description is less than 50 characters</p>}
                   


                  <div className="add-event__button-wrapper">
                  <button onClick={handleClose} className="add-event__cancel">
                      Cancel
                    </button>
                    <input className="add-event__submit" type="submit" />
                    
                    </div>
                </form>

            </Box>
          </Modal>
        </div>
      </section>
    </>
  );
}


