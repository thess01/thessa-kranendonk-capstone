import EventCard from "../EventCard/EventCard";
import { Link } from "react-router-dom";
import { useForm} from 'react-hook-form'
import axios from "axios";
import Box from "@mui/material/Box";
import React from "react";
import Modal from "@mui/material/Modal";
import "./EventList.scss";

export default function EventList({ events }) {
  const [open, setOpen] = React.useState(false);
  const { register, formState: { errors } } = useForm();
  console.log(errors);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Thank you, pending validation");
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
              <form className="add-event__form" onSubmit={handleSubmit}>
                    <label className="add-event__label" htmlFor="eventName">Event Name</label>
                    <input type="text" placeholder="Event Name" {...register("eventName", {required: true, max: 50, min: -3, maxLength: 80})} />
                    {errors.eventName && <p>This field is required</p>}

                    <label className="add-event__label" htmlFor="eventLocation">Event Location</label>
                    <input type="text" placeholder="Event Location" {...register("eventLocation", {required: true, max: 50, min: -3, maxLength: 80})} />
                    {errors.eventLocation && <p>This field is required</p>}

                    <label className="add-event__label" htmlFor="date">Date</label>
                    <input type="text" placeholder="Date" {...register("date", {required: true, maxLength: 100})} />
                    {errors.date && <p>This field is required</p>}

                    <label className="add-event__label" htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" {...register("email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} />
                    {errors.email && <p>Email did not pass the requirements</p>}
                    
                    <label className="add-event__label" htmlFor="description">Description</label>
                    <input type="text" placeholder="Description" {...register("description", {validate: (value) => value.length > 50})} />
                    {errors.description && <p>Your description is less than 50 characters</p>}
                   


                  <div className="add-event__button-wrapper">
                    <button className="add-event__submit" type="submit">
                      Send
                    </button>
                    <button onClick={handleClose} className="add-event__cancel">
                      Cancel
                    </button>
                    </div>
                </form>

            </Box>
          </Modal>
        </div>
      </section>
    </>
  );
}


